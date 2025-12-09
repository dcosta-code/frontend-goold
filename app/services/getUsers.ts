import { api } from "@/app/config/api";

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}

export async function getUsers(page = 1, limit = 10): Promise<UsersResponse> {
  const response = await api.get<UsersResponse>("/users", {
    params: { page, limit },
  });
  return response.data;
}
