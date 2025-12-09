import { useMutation } from "@tanstack/react-query";
import { authStorage } from "@/app/utils/authStorage";

export function useEmployeeLogout() {
  return useMutation<void, Error, void>({
    mutationFn: async () => {
      authStorage.clearEmployeeTokens();
    },
  });
}
