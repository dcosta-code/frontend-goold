"use client";

import { ChatHeader } from "@/app/components/ChatHeader";
import { AvatarUpload } from "@/app/components/AvatarUpload";
import { MaskedInput } from "@/app/components/MaskedInput";
import { Input } from "@/app/components/Input";
import { PinInput } from "@/app/components/PinInput";
import { Button } from "@/app/components/Button";
import {
  PageContainer,
  Content,
  AvatarSection,
  Separator,
  Form,
  Footer,
  LogoutButton,
} from "./styles";

interface Props {
  photo: string | null;
  cpf: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  onPhotoChange: (photo: string | null) => void;
  onCpfChange: (value: string) => void;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  onLogout: () => void;
}

export function MyAccountPageView({
  photo,
  cpf,
  name,
  email,
  phone,
  password,
  onPhotoChange,
  onCpfChange,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onPasswordChange,
  onSubmit,
  onBack,
  onLogout,
}: Props) {
  return (
    <PageContainer>
      <ChatHeader title="Minha conta" onBack={onBack} />

      <Content>
        <AvatarSection>
          <AvatarUpload photo={photo} onPhotoChange={onPhotoChange} />
          <Separator />
        </AvatarSection>

        <Form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          <MaskedInput
            value={cpf}
            onChange={onCpfChange}
            mask="cpf"
            title="CPF"
            subtitle="Obrigatorio"
            disabled
          />

          <Input
            value={name}
            onChange={onNameChange}
            title="Nome completo"
            subtitle="Obrigatorio"
          />

          <Input
            value={email}
            onChange={onEmailChange}
            type="email"
            title="E-mail de Contato"
            subtitle="Obrigatorio"
          />

          <MaskedInput
            value={phone}
            onChange={onPhoneChange}
            mask="phone"
            title="Celular com DDD"
            subtitle="Obrigatorio"
          />

          <PinInput
            value={password}
            onChange={onPasswordChange}
            length={6}
            title="Nova senha de acesso"
          />
        </Form>
      </Content>

      <Footer>
        <Button type="submit" variant="primary" size="medium" onClick={onSubmit}>
          Salvar
        </Button>
        <LogoutButton type="button" onClick={onLogout}>
          Sair
        </LogoutButton>
      </Footer>
    </PageContainer>
  );
}
