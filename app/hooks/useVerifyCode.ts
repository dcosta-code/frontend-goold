import { useMutation } from "@tanstack/react-query";
import { verifyCode, VerifyCodeRequest, VerifyCodeResponse } from "@/app/services/authService";

export function useVerifyCode() {
  return useMutation<VerifyCodeResponse, Error, VerifyCodeRequest>({
    mutationFn: verifyCode,
  });
}
