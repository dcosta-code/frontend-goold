import { api } from "@/app/config/api";

export interface LoginEmployeeRequest {
  email: string;
  password: string;
}

export interface LoginEmployeeResponse {
  accessToken: string;
  refreshToken: string;
}

export async function loginEmployee(
  data: LoginEmployeeRequest
): Promise<LoginEmployeeResponse> {
  const response = await api.post<LoginEmployeeResponse>(
    "/employee/auth/login",
    data
  );
  return response.data;
}
