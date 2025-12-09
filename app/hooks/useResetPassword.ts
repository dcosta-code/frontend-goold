import { useMutation } from "@tanstack/react-query";
import { resetPassword, ResetPasswordRequest, MessageResponse } from "@/app/services/authService";

export function useResetPassword() {
  return useMutation<MessageResponse, Error, ResetPasswordRequest>({
    mutationFn: resetPassword,
  });
}
