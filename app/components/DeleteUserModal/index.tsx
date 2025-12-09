"use client";

import Modal from "react-modal";
import { useTheme } from "styled-components";
import { Text } from "../Text";
import { CloseIcon } from "@/app/icons/CloseIcon";
import {
  getModalStyles,
  Container,
  Header,
  CloseButton,
  Divider,
  Content,
  Message,
  UserName,
  ConfirmButton,
} from "./styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  onConfirm: () => void;
  isLoading?: boolean;
}

export function DeleteUserModal({
  isOpen,
  onClose,
  userName,
  onConfirm,
  isLoading = false,
}: Props) {
  const theme = useTheme();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={getModalStyles(theme)}
      ariaHideApp={false}
    >
      <Container>
        <Header>
          <Text size="xl" weight="medium" color="primary">
            Excluir usuário
          </Text>
          <CloseButton onClick={onClose}>
            <CloseIcon width={23} height={24} />
          </CloseButton>
        </Header>

        <Divider />

        <Content>
          <Message>
            Tem certeza que deseja excluir o usuário{" "}
            <UserName>{userName}</UserName>?
          </Message>

          <ConfirmButton onClick={onConfirm} disabled={isLoading}>
            <Text size="lg" weight="semibold" color="inverse">
              {isLoading ? "Excluindo..." : "Confirmar exclusão"}
            </Text>
          </ConfirmButton>
        </Content>
      </Container>
    </Modal>
  );
}
