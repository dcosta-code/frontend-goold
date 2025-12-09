import { useMutation } from "@tanstack/react-query";
import { forgotPassword, ForgotPasswordRequest, ForgotPasswordResponse } from "@/app/services/authService";

export function useForgotPassword() {
  return useMutation<ForgotPasswordResponse, Error, ForgotPasswordRequest>({
    mutationFn: forgotPassword,
  });
}
