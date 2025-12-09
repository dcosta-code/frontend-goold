"use client";

import { ChatHeader } from "@/app/components/ChatHeader";
import { MaskedInput } from "@/app/components/MaskedInput";
import { PinInput } from "@/app/components/PinInput";
import { Button } from "@/app/components/Button";
import { Text } from "@/app/components/Text";
import { FingerprintIcon } from "@/app/icons/FingerprintIcon";
import { useTheme } from "styled-components";
import {
  PageContainer,
  Content,
  SupportImage,
  Title,
  Form,
  LinkText,
  FooterText,
} from "./styles";

interface Props {
  cpf: string;
  pin: string;
  isFormValid: boolean;
  isLoading: boolean;
  onCpfChange: (value: string) => void;
  onPinChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onForgotPassword: () => void;
  onCreateAccount: () => void;
}

export function UserLoginPageView({
  cpf,
  pin,
  isFormValid,
  isLoading,
  onCpfChange,
  onPinChange,
  onSubmit,
  onForgotPassword,
  onCreateAccount,
}: Props) {
  const theme = useTheme();

  return (
    <PageContainer>
      <ChatHeader title="Chat" />

      <Content>
        <SupportImage
          src="/images/customer-support.png"
          alt="Suporte ao cliente"
        />

        <Title>Entre na sua conta para falar com nosso time suporte...</Title>

        <Form onSubmit={onSubmit}>
          <MaskedInput
            value={cpf}
            onChange={onCpfChange}
            mask="cpf"
            title="CPF"
            subtitle="Obrigatorio"
            placeholder="Insira seu CPF"
            icon={
              <FingerprintIcon
                width={20}
                height={20}
                color={theme.colors.text.primary}
              />
            }
          />

          <PinInput
            value={pin}
            onChange={onPinChange}
            length={6}
            title="Senha de acesso"
            subtitle="Obrigatorio"
          />

          <Button
            type="submit"
            variant="primary"
            size="medium"
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? "Acessando..." : "Acessar conta"}
          </Button>

          <LinkText type="button" onClick={onForgotPassword}>
            Não lembra da senha? Clique aqui
          </LinkText>

          <FooterText>
            <Text size="md" weight="medium">
              Ainda não tem uma conta Goold?
            </Text>
            <LinkText type="button" onClick={onCreateAccount}>
              Clique aqui para criar sua conta Goold
            </LinkText>
          </FooterText>
        </Form>
      </Content>
    </PageContainer>
  );
}
