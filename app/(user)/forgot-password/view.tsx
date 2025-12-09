"use client";

import { useTheme } from "styled-components";
import { ChatHeader } from "@/app/components/ChatHeader";
import { MaskedInput } from "@/app/components/MaskedInput";
import { Button } from "@/app/components/Button";
import { FingerprintIcon } from "@/app/icons/FingerprintIcon";
import {
  PageContainer,
  Content,
  SupportImage,
  Title,
  Subtitle,
  TextGroup,
  Form,
} from "./styles";

interface Props {
  cpf: string;
  isFormValid: boolean;
  isLoading: boolean;
  onCpfChange: (value: string) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ForgotPasswordPageView({
  cpf,
  isFormValid,
  isLoading,
  onCpfChange,
  onBack,
  onSubmit,
}: Props) {
  const theme = useTheme();

  return (
    <PageContainer>
      <ChatHeader title="Recuperação de senha" onBack={onBack} />

      <Content>
        <SupportImage
          src="/images/alzheimer-memory-loss.png"
          alt="Ilustração de recuperação de memória"
        />

        <TextGroup>
          <Title>Esqueceu sua senha do Chat?</Title>
          <Subtitle>
            Insira seu CPF para receber o código de recuperação de senha
            diretamente no seu e-mail
          </Subtitle>
        </TextGroup>

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

          <Button
            type="submit"
            variant="primary"
            size="medium"
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar codigo"}
          </Button>
        </Form>
      </Content>
    </PageContainer>
  );
}
