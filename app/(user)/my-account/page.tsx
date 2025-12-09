"use client";

import { Suspense, useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getUnmaskedValue } from "@/app/components/MaskedInput";
import { MyAccountPageView } from "./view";

function formatCpf(value: string): string {
  const digits = value.replace(/\D/g, "");
  let result = "";
  for (let i = 0; i < digits.length && i < 11; i++) {
    if (i === 3 || i === 6) result += ".";
    if (i === 9) result += "-";
    result += digits[i];
  }
  return result;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  let result = "";
  for (let i = 0; i < digits.length && i < 11; i++) {
    if (i === 0) result += "(";
    if (i === 2) result += ") ";
    if (i === 7) result += "-";
    result += digits[i];
  }
  return result;
}

function MyAccountContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const cpfParam = searchParams.get("cpf") || "";
  const nameParam = searchParams.get("name") || "";
  const emailParam = searchParams.get("email") || "";
  const phoneParam = searchParams.get("phone") || "";
  const photoParam = searchParams.get("photo") || null;

  const [photo, setPhoto] = useState<string | null>(photoParam);
  const [cpf, setCpf] = useState(() => formatCpf(cpfParam));
  const [name, setName] = useState(nameParam);
  const [email, setEmail] = useState(emailParam);
  const [phone, setPhone] = useState(() => formatPhone(phoneParam));
  const [password, setPassword] = useState("");

  useEffect(() => {
    setCpf(formatCpf(cpfParam));
    setName(nameParam);
    setEmail(emailParam);
    setPhone(formatPhone(phoneParam));
    setPhoto(photoParam);
  }, [cpfParam, nameParam, emailParam, phoneParam, photoParam]);

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

  const handleSubmit = useCallback(() => {
    const unmaskedCpf = getUnmaskedValue(cpf);
    const unmaskedPhone = getUnmaskedValue(phone);
    console.log("Saving account:", {
      photo,
      cpf: unmaskedCpf,
      name,
      email,
      phone: unmaskedPhone,
      password,
    });
  }, [photo, cpf, name, email, phone, password]);

  const handleLogout = useCallback(() => {
    console.log("Logging out...");
    router.push("/");
  }, [router]);

  return (
    <MyAccountPageView
      photo={photo}
      cpf={cpf}
      name={name}
      email={email}
      phone={phone}
      password={password}
      onPhotoChange={setPhoto}
      onCpfChange={setCpf}
      onNameChange={handleNameChange}
      onEmailChange={handleEmailChange}
      onPhoneChange={setPhone}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
      onBack={handleBack}
      onLogout={handleLogout}
    />
  );
}

export default function MyAccountPage() {
  return (
    <Suspense>
      <MyAccountContent />
    </Suspense>
  );
}
