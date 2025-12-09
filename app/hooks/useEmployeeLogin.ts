import { useMutation } from "@tanstack/react-query";
import {
  loginEmployee,
  LoginEmployeeRequest,
  LoginEmployeeResponse,
} from "@/app/services/loginEmployee";
import { authStorage } from "@/app/utils/authStorage";

export function useEmployeeLogin() {
  return useMutation<LoginEmployeeResponse, Error, LoginEmployeeRequest>({
    mutationFn: loginEmployee,
    onSuccess: (data) => {
      authStorage.setEmployeeTokens(data.accessToken, data.refreshToken);
    },
  });
}
