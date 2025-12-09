const EMPLOYEE_ACCESS_TOKEN_KEY = "employee_accessToken";
const EMPLOYEE_REFRESH_TOKEN_KEY = "employee_refreshToken";
const CUSTOMER_ACCESS_TOKEN_KEY = "customer_accessToken";
const CUSTOMER_REFRESH_TOKEN_KEY = "customer_refreshToken";

interface JwtPayload {
  sub?: string;
  externalId?: string;
  email?: string;
  exp?: number;
  type?: "employee" | "customer";
}

function decodeJwt(token: string): JwtPayload | null {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

function getTokenType(token: string): "employee" | "customer" | null {
  const payload = decodeJwt(token);
  if (!payload || !payload.type) return null;
  return payload.type;
}

export const authStorage = {
  getEmployeeAccessToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(EMPLOYEE_ACCESS_TOKEN_KEY);
  },

  getEmployeeRefreshToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(EMPLOYEE_REFRESH_TOKEN_KEY);
  },

  setEmployeeTokens: (accessToken: string, refreshToken: string): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(EMPLOYEE_ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(EMPLOYEE_REFRESH_TOKEN_KEY, refreshToken);
  },

  setEmployeeAccessToken: (accessToken: string): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(EMPLOYEE_ACCESS_TOKEN_KEY, accessToken);
  },

  clearEmployeeTokens: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(EMPLOYEE_ACCESS_TOKEN_KEY);
    localStorage.removeItem(EMPLOYEE_REFRESH_TOKEN_KEY);
  },

  getCustomerAccessToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(CUSTOMER_ACCESS_TOKEN_KEY);
  },

  getCustomerRefreshToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(CUSTOMER_REFRESH_TOKEN_KEY);
  },

  setCustomerTokens: (accessToken: string, refreshToken: string): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(CUSTOMER_ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(CUSTOMER_REFRESH_TOKEN_KEY, refreshToken);
  },

  setCustomerAccessToken: (accessToken: string): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(CUSTOMER_ACCESS_TOKEN_KEY, accessToken);
  },

  clearCustomerTokens: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(CUSTOMER_ACCESS_TOKEN_KEY);
    localStorage.removeItem(CUSTOMER_REFRESH_TOKEN_KEY);
  },

  isEmployeeAuthenticated: (): boolean => {
    return !!authStorage.getEmployeeAccessToken();
  },

  isCustomerAuthenticated: (): boolean => {
    return !!authStorage.getCustomerAccessToken();
  },

  getCurrentUserId: (): string | null => {
    const employeeToken = authStorage.getEmployeeAccessToken();
    if (employeeToken) {
      const payload = decodeJwt(employeeToken);
      if (payload) {
        return payload.externalId || payload.sub || null;
      }
    }

    const customerToken = authStorage.getCustomerAccessToken();
    if (customerToken) {
      const payload = decodeJwt(customerToken);
      if (payload) {
        return payload.externalId || payload.sub || null;
      }
    }

    return null;
  },

  getTokenType,
};
