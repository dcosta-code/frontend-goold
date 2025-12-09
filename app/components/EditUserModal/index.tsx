"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { Text } from "../Text";
import { Input } from "../Input";
import { InputSelect } from "../InputSelect";
import { AvatarUpload } from "../AvatarUpload";
import { PermissionsCard } from "../PermissionsCard";
import { ArrowLeftIcon } from "@/app/icons/ArrowLeftIcon";
import {
  getModalStyles,
  Container,
  Header,
  HeaderLeft,
  BackButton,
  EditButton,
  Content,
  Card,
  CardContent,
  CardTitle,
  Divider,
  PhotoSection,
  FormSection,
  FormRow,
  FormField,
} from "./styles";

interface UserData {
  id: string;
  name: string;
  email: string;
  employeeType: string;
  photo: string | null;
  permissions: string[];
}

interface SubmitData {
  id: string;
  name: string;
  email: string;
  employeeType: string;
  photo: string | null;
  permissions: string[];
  password?: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user: UserData | null;
  onSubmit?: (data: SubmitData) => void;
}

const employeeTypeOptions = [
  { value: "admin", label: "Administrador" },
  { value: "support", label: "Suporte" },
];

export function EditUserModal({ isOpen, onClose, user, onSubmit }: Props) {
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setEmployeeType(user.employeeType);
      setPhoto(user.photo);
      setSelectedPermissions(user.permissions || []);
      setPassword("");
      setConfirmPassword("");
    }
  }, [user]);

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    employeeType !== "" &&
    (password === "" || (password !== "" && password === confirmPassword)) &&
    selectedPermissions.length > 0;

  const handleTogglePermission = (permissionKey: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(permissionKey)
        ? prev.filter((p) => p !== permissionKey)
        : [...prev, permissionKey]
    );
  };

  const handlePhotoChange = (newPhoto: string | null) => {
    setPhoto(newPhoto);
  };

  const handleSubmit = () => {
    if (isFormValid && user) {
      const submitData: SubmitData = {
        id: user.id,
        name,
        email,
        employeeType,
        photo,
        permissions: selectedPermissions,
      };

      if (password) {
        submitData.password = password;
      }

      onSubmit?.(submitData);
    }
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setEmployeeType("");
    setPhoto(null);
    setSelectedPermissions([]);
    onClose();
  };

  if (!user) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={getModalStyles(theme)}
      ariaHideApp={false}
    >
      <Container>
        <Header>
          <HeaderLeft>
            <BackButton onClick={handleClose}>
              <ArrowLeftIcon width={19} height={19} />
            </BackButton>
            <Text size="xl" weight="medium" color="primary">
              Editar usuário
            </Text>
          </HeaderLeft>
          <EditButton
            $disabled={!isFormValid}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            <Text size="lg" weight="semibold" color="inverse">
              Editar
            </Text>
          </EditButton>
        </Header>

        <Content>
          <Card>
            <CardContent>
              <CardTitle>
                <Text size="xl" weight="medium" color="primary">
                  Informações do funcionário
                </Text>
              </CardTitle>

              <Divider />

              <PhotoSection>
                <AvatarUpload photo={photo} onPhotoChange={handlePhotoChange} />
              </PhotoSection>

              <Divider />

              <FormSection>
                <FormRow>
                  <FormField>
                    <Input
                      title="Nome do funcionário"
                      subtitle="Obrigatorio"
                      placeholder="Insira um nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormField>
                  <FormField>
                    <Input
                      title="E-mail de acesso"
                      subtitle="Obrigatorio"
                      type="email"
                      placeholder="Insira uma e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField>
                    <Input
                      title="Senha de acesso"
                      subtitle="Opcional"
                      type="password"
                      placeholder="Insira uma nova senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormField>
                  <FormField>
                    <Input
                      title="Confirme a senha de acesso"
                      subtitle="Opcional"
                      type="password"
                      placeholder="Confirme a nova senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField>
                    <InputSelect
                      title="Tipo de funcionário (Obrigatorio)"
                      placeholder="Selecione"
                      options={employeeTypeOptions}
                      value={employeeType}
                      onChange={(e) => setEmployeeType(e.target.value)}
                    />
                  </FormField>
                </FormRow>
              </FormSection>
            </CardContent>
          </Card>

          <PermissionsCard
            selectedPermissions={selectedPermissions}
            onTogglePermission={handleTogglePermission}
            title="Permissões de acesso"
          />
        </Content>
      </Container>
    </Modal>
  );
}
