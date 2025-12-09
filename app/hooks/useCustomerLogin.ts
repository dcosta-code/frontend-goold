import { useMutation } from "@tanstack/react-query";
import { loginCustomer, LoginRequest, TokenResponse } from "@/app/services/authService";
import { authStorage } from "@/app/utils/authStorage";

export function useCustomerLogin() {
  return useMutation<TokenResponse, Error, LoginRequest>({
    mutationFn: loginCustomer,
    onSuccess: (data) => {
      authStorage.setCustomerTokens(data.accessToken, data.refreshToken);
    },
  });
}
