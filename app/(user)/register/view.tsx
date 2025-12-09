"use client";

import { ChatHeader } from "@/app/components/ChatHeader";
import { MaskedInput } from "@/app/components/MaskedInput";
import { Input } from "@/app/components/Input";
import { PinInput } from "@/app/components/PinInput";
import { Button } from "@/app/components/Button";
import {
  PageContainer,
  Content,
  SupportImage,
  Title,
  Subtitle,
  Form,
  ButtonWrapper,
} from "./styles";

interface Props {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  isFormValid: boolean;
  isLoading: boolean;
  onCpfChange: (value: string) => void;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export function RegisterPageView({
  cpf,
  name,
  email,
  phone,
  password,
  isFormValid,
  isLoading,
  onCpfChange,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onPasswordChange,
  onSubmit,
  onBack,
}: Props) {
  return (
    <PageContainer>
      <ChatHeader title="Crie sua conta" onBack={onBack} />

      <Content>
        <SupportImage
          src="/images/premium-service.png"
          alt="Servico premium"
        />

        <Title>Crie sua conta no Chat</Title>

        <Subtitle>
          Cadastre-se em menos de <strong>5 segundos</strong> e aproveite nosso chat
        </Subtitle>

        <Form onSubmit={onSubmit}>
          <MaskedInput
            value={cpf}
            onChange={onCpfChange}
            mask="cpf"
            title="CPF"
            subtitle="Obrigatorio"
            placeholder="Insira seu CPF"
          />

          <Input
            value={name}
            onChange={onNameChange}
            title="Nome completo"
            subtitle="Obrigatorio"
            placeholder="Insira seu nome completo"
          />

          <Input
            value={email}
            onChange={onEmailChange}
            type="email"
            title="E-mail de Contato"
            subtitle="Obrigatorio"
            placeholder="Insira seu e-mail"
          />

          <Input
            value={phone}
            onChange={onPhoneChange}
            type="tel"
            title="Celular com DDD"
            subtitle="Obrigatorio"
            placeholder="Insira seu numero"
          />

          <PinInput
            value={password}
            onChange={onPasswordChange}
            length={6}
            title="Senha de acesso"
            subtitle="Obrigatorio"
          />

          <ButtonWrapper>
            <Button
              type="submit"
              variant="primary"
              size="medium"
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? "Criando conta..." : "Criar conta"}
            </Button>
          </ButtonWrapper>
        </Form>
      </Content>
    </PageContainer>
  );
}
