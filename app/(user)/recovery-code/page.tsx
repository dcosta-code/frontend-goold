"use client";

import { useState, useCallback, Suspense, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useVerifyCode } from "@/app/hooks/useVerifyCode";
import { useForgotPassword } from "@/app/hooks/useForgotPassword";
import { RecoveryCodePageView } from "./view";

function RecoveryCodeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const maskedEmail = searchParams.get("email") || "";
  const [code, setCode] = useState("");

  const cpf = useMemo(() => {
    if (typeof window === "undefined") return "";
    return sessionStorage.getItem("recovery_cpf") || "";
  }, []);

  const verifyCodeMutation = useVerifyCode();
  const resendCodeMutation = useForgotPassword();

  useEffect(() => {
    if (!cpf) {
      router.push("/forgot-password");
    }
  }, [cpf, router]);

  const handleBack = useCallback(() => {
    router.push("/forgot-password");
  }, [router]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (code.length !== 5) {
        return;
      }

      try {
        const response = await verifyCodeMutation.mutateAsync({
          cpf,
          code,
        });

        sessionStorage.setItem("reset_token", response.token);

        router.push("/new-password");
      } catch {
        toast.error("Codigo invalido ou expirado");
      }
    },
    [code, cpf, router, verifyCodeMutation]
  );

  const handleResendCode = useCallback(async () => {
    try {
      await resendCodeMutation.mutateAsync({ cpf });
      toast.success("Codigo reenviado com sucesso");
    } catch {
      toast.error("Erro ao reenviar codigo");
    }
  }, [cpf, resendCodeMutation]);

  const handleSupportClick = useCallback(() => {
    // TODO: Implement support opening
  }, []);

  const isFormValid = code.length === 5;

  return (
    <RecoveryCodePageView
      maskedEmail={maskedEmail}
      code={code}
      isFormValid={isFormValid}
      isLoading={verifyCodeMutation.isPending}
      isResending={resendCodeMutation.isPending}
      onCodeChange={setCode}
      onBack={handleBack}
      onSubmit={handleSubmit}
      onResendCode={handleResendCode}
      onSupportClick={handleSupportClick}
    />
  );
}

export default function RecoveryCodePage() {
  return (
    <Suspense fallback={null}>
      <RecoveryCodeContent />
    </Suspense>
  );
}
