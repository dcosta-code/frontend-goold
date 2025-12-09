import { useQuery } from "@tanstack/react-query";
import { getUsers, UsersResponse } from "@/app/services/getUsers";

export function useUsers(page = 1, limit = 10) {
  return useQuery<UsersResponse>({
    queryKey: ["users", page, limit],
    queryFn: () => getUsers(page, limit),
  });
}
