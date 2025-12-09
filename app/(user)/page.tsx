"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { getUnmaskedValue } from "@/app/components/MaskedInput";
import { useCustomerLogin } from "@/app/hooks/useCustomerLogin";
import { UserLoginPageView } from "./view";

export default function UserLoginPage() {
  const router = useRouter();
  const [cpf, setCpf] = useState("");
  const [pin, setPin] = useState("");

  const loginMutation = useCustomerLogin();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const unmaskedCpf = getUnmaskedValue(cpf);
      if (unmaskedCpf.length !== 11) {
        return;
      }

      if (pin.length !== 6) {
        return;
      }

      try {
        await loginMutation.mutateAsync({
          cpf: unmaskedCpf,
          password: pin,
        });
        router.push("/chat");
      } catch {
        toast.error("CPF ou senha incorretos");
      }
    },
    [cpf, pin, router, loginMutation]
  );

  const handleForgotPassword = useCallback(() => {
    router.push("/forgot-password");
  }, [router]);

  const handleCreateAccount = useCallback(() => {
    router.push("/register");
  }, [router]);

  const isFormValid = getUnmaskedValue(cpf).length === 11 && pin.length === 6;

  return (
    <UserLoginPageView
      cpf={cpf}
      pin={pin}
      isFormValid={isFormValid}
      isLoading={loginMutation.isPending}
      onCpfChange={setCpf}
      onPinChange={setPin}
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
      onCreateAccount={handleCreateAccount}
    />
  );
}
