"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { getUnmaskedValue } from "@/app/components/MaskedInput";
import { useForgotPassword } from "@/app/hooks/useForgotPassword";
import { ApiError, ErrorCodes } from "@/app/services/authService";
import { ForgotPasswordPageView } from "./view";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [cpf, setCpf] = useState("");

  const forgotPasswordMutation = useForgotPassword();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const unmaskedCpf = getUnmaskedValue(cpf);
      if (unmaskedCpf.length !== 11) {
        return;
      }

      try {
        const response = await forgotPasswordMutation.mutateAsync({
          cpf: unmaskedCpf,
        });

        sessionStorage.setItem("recovery_cpf", unmaskedCpf);

        router.push(`/recovery-code?email=${encodeURIComponent(response.maskedEmail)}`);
      } catch (error) {
        const axiosError = error as AxiosError<ApiError>;
        const errorCode = axiosError.response?.data?.error?.code;

        if (errorCode === ErrorCodes.CPF_NOT_FOUND) {
          toast.error("CPF nao cadastrado");
        } else {
          toast.error("Erro ao solicitar recuperacao de senha");
        }
      }
    },
    [cpf, router, forgotPasswordMutation]
  );

  const isFormValid = getUnmaskedValue(cpf).length === 11;

  return (
    <ForgotPasswordPageView
      cpf={cpf}
      isFormValid={isFormValid}
      isLoading={forgotPasswordMutation.isPending}
      onCpfChange={setCpf}
      onBack={handleBack}
      onSubmit={handleSubmit}
    />
  );
}
