import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { authStorage } from "@/app/utils/authStorage";

type AuthContext = "employee" | "customer";

interface FailedRequest {
  resolve: (token: string) => void;
  reject: (error: Error) => void;
  context: AuthContext;
}

let isRefreshingEmployee = false;
let isRefreshingCustomer = false;
let failedEmployeeRequestsQueue: FailedRequest[] = [];
let failedCustomerRequestsQueue: FailedRequest[] = [];

function getAuthContext(): AuthContext {
  const employeeToken = authStorage.getEmployeeAccessToken();
  if (employeeToken) {
    return "employee";
  }
  return "customer";
}

function getAccessToken(context: AuthContext): string | null {
  return context === "employee"
    ? authStorage.getEmployeeAccessToken()
    : authStorage.getCustomerAccessToken();
}

function getRefreshToken(context: AuthContext): string | null {
  return context === "employee"
    ? authStorage.getEmployeeRefreshToken()
    : authStorage.getCustomerRefreshToken();
}

function setAccessToken(context: AuthContext, token: string): void {
  if (context === "employee") {
    authStorage.setEmployeeAccessToken(token);
  } else {
    authStorage.setCustomerAccessToken(token);
  }
}

function clearTokens(context: AuthContext): void {
  if (context === "employee") {
    authStorage.clearEmployeeTokens();
  } else {
    authStorage.clearCustomerTokens();
  }
}

function getRefreshEndpoint(context: AuthContext): string {
  return context === "employee" ? "/api/employee/auth/refresh" : "/api/auth/refresh";
}

function getIsRefreshing(context: AuthContext): boolean {
  return context === "employee" ? isRefreshingEmployee : isRefreshingCustomer;
}

function setIsRefreshing(context: AuthContext, value: boolean): void {
  if (context === "employee") {
    isRefreshingEmployee = value;
  } else {
    isRefreshingCustomer = value;
  }
}

function getFailedRequestsQueue(context: AuthContext): FailedRequest[] {
  return context === "employee" ? failedEmployeeRequestsQueue : failedCustomerRequestsQueue;
}

function clearFailedRequestsQueue(context: AuthContext): void {
  if (context === "employee") {
    failedEmployeeRequestsQueue = [];
  } else {
    failedCustomerRequestsQueue = [];
  }
}

function addToFailedRequestsQueue(context: AuthContext, request: FailedRequest): void {
  if (context === "employee") {
    failedEmployeeRequestsQueue.push(request);
  } else {
    failedCustomerRequestsQueue.push(request);
  }
}

export const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const context = getAuthContext();
    const accessToken = getAccessToken(context);
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      const context = getAuthContext();

      if (getIsRefreshing(context)) {
        return new Promise((resolve, reject) => {
          addToFailedRequestsQueue(context, {
            resolve: (token: string) => {
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${token}`;
              }
              resolve(api(originalRequest));
            },
            reject: (err: Error) => {
              reject(err);
            },
            context,
          });
        });
      }

      originalRequest._retry = true;
      setIsRefreshing(context, true);

      const refreshToken = getRefreshToken(context);

      if (!refreshToken) {
        clearTokens(context);
        setIsRefreshing(context, false);
        clearFailedRequestsQueue(context);
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(getRefreshEndpoint(context), {
          refreshToken,
        });
        const { accessToken } = response.data;
        setAccessToken(context, accessToken);

        const queue = getFailedRequestsQueue(context);
        queue.forEach((request) => request.resolve(accessToken));
        clearFailedRequestsQueue(context);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }

        return api(originalRequest);
      } catch (refreshError) {
        const queue = getFailedRequestsQueue(context);
        queue.forEach((request) => request.reject(refreshError as Error));
        clearFailedRequestsQueue(context);
        clearTokens(context);
        return Promise.reject(refreshError);
      } finally {
        setIsRefreshing(context, false);
      }
    }

    return Promise.reject(error);
  }
);
