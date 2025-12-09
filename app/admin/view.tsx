"use client";

import { ChangeEvent } from "react";
import { Logo } from "../icons/Logo";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import {
  PageContainer,
  FormCard,
  FormContent,
  FormFields,
  ErrorMessage,
} from "./styles";

interface Props {
  email: string;
  password: string;
  isLoading?: boolean;
  error?: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export function AdminLoginPageView({
  email,
  password,
  isLoading,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: Props) {
  return (
    <PageContainer>
      <Logo />
      <Text as="h1" size="3xl" weight="semibold">
        Login Admin
      </Text>
      <FormCard>
        <FormContent>
          <FormFields>
            <Input
              type="email"
              title="E-mail"
              subtitle="Obrigatorio"
              value={email}
              onChange={onEmailChange}
              disabled={isLoading}
            />
            <Input
              type="password"
              title="Senha de acesso"
              subtitle="Obrigatorio"
              value={password}
              onChange={onPasswordChange}
              disabled={isLoading}
            />
          </FormFields>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button onClick={onSubmit} disabled={isLoading}>
            {isLoading ? "Carregando..." : "Acessar conta"}
          </Button>
        </FormContent>
      </FormCard>
    </PageContainer>
  );
}
