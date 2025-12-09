import { api } from "@/app/config/api";

export interface EmployeeResponse {
  externalId: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  permissions: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateEmployeeRequest {
  email: string;
  password: string;
  fullName: string;
  roles: string[];
  permissions: string[];
}

export interface UpdateEmployeeRequest {
  email?: string;
  password?: string;
  fullName?: string;
  isActive?: boolean;
  roles?: string[];
  permissions?: string[];
}

export async function getEmployees(
  search?: string
): Promise<EmployeeResponse[]> {
  const response = await api.get<EmployeeResponse[]>("/employee", {
    params: search ? { search } : undefined,
  });
  return response.data;
}

export async function getEmployee(
  externalId: string
): Promise<EmployeeResponse> {
  const response = await api.get<EmployeeResponse>(`/employee/${externalId}`);
  return response.data;
}

export async function createEmployee(
  data: CreateEmployeeRequest
): Promise<EmployeeResponse> {
  const response = await api.post<EmployeeResponse>("/employee", data);
  return response.data;
}

export async function updateEmployee(
  externalId: string,
  data: UpdateEmployeeRequest
): Promise<EmployeeResponse> {
  const response = await api.patch<EmployeeResponse>(
    `/employee/${externalId}`,
    data
  );
  return response.data;
}

export async function deleteEmployee(externalId: string): Promise<void> {
  await api.delete(`/employee/${externalId}`);
}
