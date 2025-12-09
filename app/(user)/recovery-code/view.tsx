"use client";

import { ChatHeader } from "@/app/components/ChatHeader";
import { PinInput } from "@/app/components/PinInput";
import { Button } from "@/app/components/Button";
import {
  PageContainer,
  Content,
  EmailImage,
  TextGroup,
  Title,
  Subtitle,
  EmailHighlight,
  PinWrapper,
  TipText,
  TipLabel,
  SupportSection,
  SupportText,
  SupportLink,
  BottomSection,
  ResendLink,
} from "./styles";

interface Props {
  maskedEmail: string;
  code: string;
  isFormValid: boolean;
  isLoading: boolean;
  isResending: boolean;
  onCodeChange: (code: string) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onResendCode: () => void;
  onSupportClick: () => void;
}

export function RecoveryCodePageView({
  maskedEmail,
  code,
  isFormValid,
  isLoading,
  isResending,
  onCodeChange,
  onBack,
  onSubmit,
  onResendCode,
  onSupportClick,
}: Props) {
  return (
    <PageContainer>
      <ChatHeader title="Recuperação de senha" onBack={onBack} />

      <Content>
        <EmailImage
          src="/images/email-recovery.png"
          alt="Ilustração de email"
        />

        <TextGroup>
          <Title>Código de recuperação — enviado por e-mail...</Title>
          <Subtitle>
            Insira abaixo o código de verificação enviado para o seu e-mail{" "}
            <EmailHighlight>{maskedEmail}</EmailHighlight>
          </Subtitle>
        </TextGroup>

        <PinWrapper>
          <PinInput
            value={code}
            onChange={onCodeChange}
            length={5}
            isPassword={false}
            size="large"
          />
        </PinWrapper>

        <TipText>
          <TipLabel>Dica:</TipLabel> Caso não encontre o e-mail na sua caixa de
          entrada, verifique a pasta de spam
        </TipText>

        <SupportSection>
          <SupportText>Não tem mais acesso ao e-mail?</SupportText>
          <SupportLink type="button" onClick={onSupportClick}>
            Clique aqui para falar com nosso suporte
          </SupportLink>
        </SupportSection>
      </Content>

      <BottomSection as="form" onSubmit={onSubmit}>
        <Button
          type="submit"
          variant="primary"
          size="medium"
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? "Verificando..." : "Confirmar codigo"}
        </Button>
        <ResendLink type="button" onClick={onResendCode} disabled={isResending}>
          {isResending ? "Reenviando..." : "Reenviar codigo"}
        </ResendLink>
      </BottomSection>
    </PageContainer>
  );
}
