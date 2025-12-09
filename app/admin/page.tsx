"use client";

import { useState, useCallback, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useEmployeeLogin } from "@/app/hooks/useEmployeeLogin";
import { AdminLoginPageView } from "./view";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const loginMutation = useEmployeeLogin();

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(() => {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          router.push("/admin/support");
        },
      }
    );
  }, [email, password, loginMutation, router]);

  return (
    <AdminLoginPageView
      email={email}
      password={password}
      isLoading={loginMutation.isPending}
      error={loginMutation.error?.message}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
}
