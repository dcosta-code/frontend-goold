"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { getUnmaskedValue } from "@/app/components/MaskedInput";
import { useCustomerRegister } from "@/app/hooks/useCustomerRegister";
import { RegisterPageView } from "./view";

export default function RegisterPage() {
  const router = useRouter();
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const registerMutation = useCustomerRegister();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const unmaskedCpf = getUnmaskedValue(cpf);
      const unmaskedPhone = phone.replace(/\D/g, "");

      try {
        await registerMutation.mutateAsync({
          cpf: unmaskedCpf,
          password,
          fullName: name,
          email,
          phone: unmaskedPhone,
        });

        toast.success("Cadastro realizado com sucesso!");
        router.push("/");
      } catch {
        toast.error("Erro ao realizar cadastro");
      }
    },
    [cpf, name, email, phone, password, router, registerMutation]
  );

  const unmaskedPhone = phone.replace(/\D/g, "");
  const isEmailValid = email.includes("@") && email.includes(".");
  const isFormValid =
    getUnmaskedValue(cpf).length === 11 &&
    name.trim().length >= 2 &&
    isEmailValid &&
    unmaskedPhone.length === 11 &&
    password.length === 6;

  return (
    <RegisterPageView
      cpf={cpf}
      name={name}
      email={email}
      phone={phone}
      password={password}
      isFormValid={isFormValid}
      isLoading={registerMutation.isPending}
      onCpfChange={setCpf}
      onNameChange={handleNameChange}
      onEmailChange={handleEmailChange}
      onPhoneChange={handlePhoneChange}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}
