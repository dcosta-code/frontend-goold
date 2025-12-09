"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useResetPassword } from "@/app/hooks/useResetPassword";
import { NewPasswordPageView } from "./view";

export default function NewPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const token = useMemo(() => {
    if (typeof window === "undefined") return "";
    return sessionStorage.getItem("reset_token") || "";
  }, []);

  const resetPasswordMutation = useResetPassword();

  useEffect(() => {
    if (!token) {
      router.push("/forgot-password");
    }
  }, [token, router]);

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (password.length !== 6 || confirmPassword.length !== 6) {
        return;
      }

      if (password !== confirmPassword) {
        toast.error("As senhas nao coincidem");
        return;
      }

      try {
        await resetPasswordMutation.mutateAsync({
          token,
          newPassword: password,
        });

        sessionStorage.removeItem("recovery_cpf");
        sessionStorage.removeItem("reset_token");

        toast.success("Senha alterada com sucesso!");
        router.push("/");
      } catch {
        toast.error("Erro ao alterar senha. Token pode ter expirado.");
      }
    },
    [password, confirmPassword, token, router, resetPasswordMutation]
  );

  const isFormValid =
    password.length === 6 &&
    confirmPassword.length === 6 &&
    password === confirmPassword;

  return (
    <NewPasswordPageView
      password={password}
      confirmPassword={confirmPassword}
      isFormValid={isFormValid}
      isLoading={resetPasswordMutation.isPending}
      onPasswordChange={setPassword}
      onConfirmPasswordChange={setConfirmPassword}
      onClose={handleClose}
      onSubmit={handleSubmit}
    />
  );
}
