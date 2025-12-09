import { api } from "@/app/config/api";

export interface LoginRequest {
  cpf: string;
  password: string;
}

export interface ForgotPasswordRequest {
  cpf: string;
}

export interface VerifyCodeRequest {
  cpf: string;
  code: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface RegisterRequest {
  cpf: string;
  password: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ForgotPasswordResponse {
  maskedEmail: string;
  code?: string;
}

export interface VerifyCodeResponse {
  token: string;
}

export interface MessageResponse {
  message: string;
}

export interface CustomerResponse {
  externalId: string;
  cpf: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiError {
  error?: {
    code: string;
    message: string;
  };
  status?: string;
  statusCode?: number;
  message?: string;
}

export const ErrorCodes = {
  CPF_NOT_FOUND: "CPF_NOT_FOUND",
} as const;

export async function loginCustomer(data: LoginRequest): Promise<TokenResponse> {
  const response = await api.post<TokenResponse>("/auth/login", data);
  return response.data;
}

export async function forgotPassword(data: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
  const response = await api.post<ForgotPasswordResponse>("/auth/forgot-password", data);
  return response.data;
}

export async function verifyCode(data: VerifyCodeRequest): Promise<VerifyCodeResponse> {
  const response = await api.post<VerifyCodeResponse>("/auth/verify-code", data);
  return response.data;
}

export async function resetPassword(data: ResetPasswordRequest): Promise<MessageResponse> {
  const response = await api.post<MessageResponse>("/auth/reset-password", data);
  return response.data;
}

export async function registerCustomer(data: RegisterRequest): Promise<CustomerResponse> {
  const response = await api.post<CustomerResponse>("/auth/register", data);
  return response.data;
}
