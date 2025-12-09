"use client";

import { useState } from "react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { Text } from "../Text";
import { Button } from "../Button";
import { DeleteUserModal } from "../DeleteUserModal";
import { ViewPermissions } from "../ViewPermissions";
import { CloseIcon } from "@/app/icons/CloseIcon";
import { EnvelopeIcon } from "@/app/icons/EnvelopeIcon";
import { UserKeyIcon } from "@/app/icons/UserKeyIcon";
import { LockIcon } from "@/app/icons/LockIcon";
import {
  getModalStyles,
  Container,
  Header,
  CloseButton,
  TabsWrapper,
  Tab,
  TabLabel,
  TabIndicator,
  TabDivider,
  Divider,
  Content,
  UserInfo,
  InfoRow,
  ResetButton,
  PermissionsSection,
  PermissionGroup,
  PermissionRow,
  Footer,
  FooterButton,
} from "./styles";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions?: string[];
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user: UserData | null;
  currentUserId?: string | null;
  onDelete?: (userId: string) => void;
  onEdit?: (userId: string) => void;
  onResetCode?: (userId: string) => void;
}

export function UserAccessModal({
  isOpen,
  onClose,
  user,
  currentUserId,
  onDelete,
  onEdit,
  onResetCode,
}: Props) {
  const theme = useTheme();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  if (!user) return null;

  const isOwnProfile = currentUserId === user.id;

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    onDelete?.(user.id);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={getModalStyles(theme)}
        ariaHideApp={false}
      >
        <Container>
          <Header>
            <Text size="xl" weight="medium" color="primary">
              Detalhes de Acesso
            </Text>
            <CloseButton onClick={onClose}>
              <CloseIcon width={23} height={24} />
            </CloseButton>
          </Header>

          <TabsWrapper>
            <Tab>
              <TabLabel>Detalhes</TabLabel>
              <TabIndicator />
            </Tab>
            <TabDivider />
          </TabsWrapper>

          <Content>
            <UserInfo>
              <Text size="xl" weight="semibold" color="primary">
                {user.name}
              </Text>

              <InfoRow>
                <EnvelopeIcon width={18} height={18} />
                <Text
                  size="md"
                  weight="regular"
                  color="primary"
                  lineHeight="20px"
                >
                  {user.email}
                </Text>
              </InfoRow>

              <InfoRow>
                <UserKeyIcon width={18} height={18} />
                <Text
                  size="md"
                  weight="regular"
                  color="primary"
                  lineHeight="20px"
                >
                  {user.role}
                </Text>
              </InfoRow>

              <ResetButton onClick={() => onResetCode?.(user.id)}>
                <LockIcon width={13} height={16} color="white" />
                <Text
                  size="sm"
                  weight="medium"
                  color="inverse"
                  lineHeight="1.5"
                >
                  Resetar Código
                </Text>
              </ResetButton>
            </UserInfo>

            <Divider />

            <ViewPermissions permissions={user.permissions || []} />
          </Content>

          <Footer>
            {!isOwnProfile && (
              <FooterButton>
                <Button variant="danger" onClick={handleDeleteClick}>
                  Excluir usuário
                </Button>
              </FooterButton>
            )}
            <FooterButton>
              <Button variant="primary" onClick={() => onEdit?.(user.id)}>
                Editar usuário
              </Button>
            </FooterButton>
          </Footer>
        </Container>
      </Modal>

      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        userName={user.name}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}
