"use client";

import { PinInput } from "@/app/components/PinInput";
import { Button } from "@/app/components/Button";
import { CloseIcon } from "@/app/icons/CloseIcon";
import {
  PageContainer,
  CloseButton,
  Content,
  LockImage,
  TextGroup,
  Title,
  Subtitle,
  PasswordSection,
  BottomSection,
} from "./styles";

interface Props {
  password: string;
  confirmPassword: string;
  isFormValid: boolean;
  isLoading: boolean;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function NewPasswordPageView({
  password,
  confirmPassword,
  isFormValid,
  isLoading,
  onPasswordChange,
  onConfirmPasswordChange,
  onClose,
  onSubmit,
}: Props) {
  return (
    <PageContainer>
      <CloseButton type="button" onClick={onClose} aria-label="Fechar">
        <CloseIcon width={12} height={12} />
      </CloseButton>

      <Content>
        <LockImage
          src="/images/password-lock.png"
          alt="Ilustração de cadeado"
        />

        <TextGroup>
          <Title>Crie sua nova senha de acesso...</Title>
          <Subtitle>
            Preencha abaixo a nova senha que deseja cadastrar para a sua conta
            Chat
          </Subtitle>
        </TextGroup>

        <PasswordSection>
          <PinInput
            value={password}
            onChange={onPasswordChange}
            length={6}
            title="Senha de acesso"
            subtitle="Obrigatorio"
          />

          <PinInput
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            length={6}
            title="Confirme sua nova senha de acesso"
            subtitle="Obrigatorio"
          />
        </PasswordSection>
      </Content>

      <BottomSection as="form" onSubmit={onSubmit}>
        <Button type="submit" variant="primary" size="medium" disabled={!isFormValid || isLoading}>
          {isLoading ? "Salvando..." : "Confirmar nova senha"}
        </Button>
      </BottomSection>
    </PageContainer>
  );
}
