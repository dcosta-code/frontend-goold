"use client";

import { useState, useEffect } from "react";
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
  CreateButton,
  Content,
  Card,
  CardContent,
  CardTitle,
  Divider,
  PhotoSection,
  FormSection,
  FormRow,
  FormField,
  FormFieldHalf,
} from "./styles";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  employeeType: string;
  photo: string | null;
}

interface SubmitData extends FormData {
  permissions: string[];
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: SubmitData) => void;
}

const employeeTypeOptions = [
  { value: "admin", label: "Administrador" },
  { value: "support", label: "Suporte" },
];

export function CreateUserModal({
  isOpen,
  onClose,
  onSubmit,
}: Props) {
  const theme = useTheme();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    employeeType: "",
    photo: null,
  });

  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        employeeType: "",
        photo: null,
      });
      setSelectedPermissions([]);
    }
  }, [isOpen]);

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.confirmPassword.trim() !== "" &&
    formData.employeeType !== "" &&
    formData.password === formData.confirmPassword &&
    selectedPermissions.length > 0;

  const handleTogglePermission = (permissionKey: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(permissionKey)
        ? prev.filter((p) => p !== permissionKey)
        : [...prev, permissionKey]
    );
  };

  const handlePhotoChange = (photo: string | null) => {
    setFormData((prev) => ({
      ...prev,
      photo,
    }));
  };

  const handleInputChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      employeeType: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit?.({ ...formData, permissions: selectedPermissions });
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      employeeType: "",
      photo: null,
    });
    setSelectedPermissions([]);
    onClose();
  };

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
              Criar usuário
            </Text>
          </HeaderLeft>
          <CreateButton
            $disabled={!isFormValid}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            <Text size="lg" weight="semibold" color="inverse">
              Criar
            </Text>
          </CreateButton>
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
                <AvatarUpload
                  photo={formData.photo}
                  onPhotoChange={handlePhotoChange}
                />
              </PhotoSection>

              <Divider />

              <FormSection>
                <FormRow>
                  <FormField>
                    <Input
                      title="Nome do funcionário"
                      subtitle="Obrigatorio"
                      placeholder="Insira um nome"
                      value={formData.name}
                      onChange={handleInputChange("name")}
                    />
                  </FormField>
                  <FormField>
                    <Input
                      title="E-mail de acesso"
                      subtitle="Obrigatorio"
                      type="email"
                      placeholder="Insira uma e-mail"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                    />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField>
                    <Input
                      title="Senha de acesso"
                      subtitle="Obrigatorio"
                      type="password"
                      placeholder="Insira uma senha"
                      value={formData.password}
                      onChange={handleInputChange("password")}
                    />
                  </FormField>
                  <FormField>
                    <Input
                      title="Confirme a senha de acesso"
                      subtitle="Obrigatorio"
                      type="password"
                      placeholder="Insira uma senha"
                      value={formData.confirmPassword}
                      onChange={handleInputChange("confirmPassword")}
                    />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormFieldHalf>
                    <InputSelect
                      title="Tipo de funcionário (Obrigatorio)"
                      placeholder="Selecione"
                      options={employeeTypeOptions}
                      value={formData.employeeType}
                      onChange={handleSelectChange}
                    />
                  </FormFieldHalf>
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
