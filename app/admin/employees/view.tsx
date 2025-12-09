"use client";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { MenuProfile } from "../../components/MenuProfile";
import { Button } from "../../components/Button";
import { UserAccessModal } from "../../components/UserAccessModal";
import { CreateUserModal } from "../../components/CreateUserModal";
import { EditUserModal } from "../../components/EditUserModal";
import { Text } from "../../components/Text";
import { EmployeesSearchInput } from "./components/EmployeesSearchInput";
import { EmployeesTable, Employee } from "./components/EmployeesTable";
import {
  PageContainer,
  ContentWrapper,
  MainContent,
  CardContainer,
  HeaderRow,
  ButtonWrapper,
  LoadingContainer,
  ErrorContainer,
} from "./styles";

interface ModalUser {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions: string[];
}

interface EditUser {
  id: string;
  name: string;
  email: string;
  employeeType: string;
  photo: string | null;
  permissions: string[];
}

interface CreateUserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  employeeType: string;
  photo: string | null;
  permissions: string[];
}

interface EditUserData {
  id: string;
  name: string;
  email: string;
  employeeType: string;
  photo: string | null;
  permissions: string[];
  password?: string;
}

interface Props {
  employees: Employee[];
  isModalOpen: boolean;
  isCreateModalOpen: boolean;
  isEditModalOpen: boolean;
  modalUser: ModalUser | null;
  editUser: EditUser | null;
  isLoading?: boolean;
  isError?: boolean;
  currentUserId?: string | null;
  onDebouncedSearch: (value: string) => void;
  onToggleStatus: (id: string, active: boolean) => void;
  onCreateUser: () => void;
  onRowClick: (employee: Employee) => void;
  onCloseModal: () => void;
  onCloseCreateModal: () => void;
  onCloseEditModal: () => void;
  onDeleteUser: (userId: string) => void;
  onEditUser: (userId: string) => void;
  onResetCode: (userId: string) => void;
  onSubmitCreateUser: (data: CreateUserData) => void;
  onSubmitEditUser: (data: EditUserData) => void;
}

export function EmployeesPageView({
  employees,
  isModalOpen,
  isCreateModalOpen,
  isEditModalOpen,
  modalUser,
  editUser,
  isLoading,
  isError,
  currentUserId,
  onDebouncedSearch,
  onToggleStatus,
  onCreateUser,
  onRowClick,
  onCloseModal,
  onCloseCreateModal,
  onCloseEditModal,
  onDeleteUser,
  onEditUser,
  onResetCode,
  onSubmitCreateUser,
  onSubmitEditUser,
}: Props) {
  const renderTableContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <Text size="lg" weight="medium" color="secondary">
            Carregando funcionários...
          </Text>
        </LoadingContainer>
      );
    }

    if (isError) {
      return (
        <ErrorContainer>
          <Text size="lg" weight="medium" color="error">
            Erro ao carregar funcionários. Tente novamente.
          </Text>
        </ErrorContainer>
      );
    }

    return (
      <EmployeesTable
        employees={employees}
        onToggleStatus={onToggleStatus}
        onRowClick={onRowClick}
      />
    );
  };

  return (
    <PageContainer>
      <Sidebar />
      <ContentWrapper>
        <Header
          title="Gestão de Acessos"
          subtitle="Gerencie todos os acessos aos sistemas Goold"
        >
          <MenuProfile
            name="Mateus Barbosa"
            role="Administrador"
            imageUrl="https://i.pravatar.cc/150?img=12"
          />
        </Header>
        <MainContent>
          <CardContainer>
            <HeaderRow>
              <EmployeesSearchInput onDebouncedSearch={onDebouncedSearch} />
              <ButtonWrapper>
                <Button onClick={onCreateUser}>Criar usuário</Button>
              </ButtonWrapper>
            </HeaderRow>
            {renderTableContent()}
          </CardContainer>
        </MainContent>
      </ContentWrapper>

      <UserAccessModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        user={modalUser}
        currentUserId={currentUserId}
        onDelete={onDeleteUser}
        onEdit={onEditUser}
        onResetCode={onResetCode}
      />

      <CreateUserModal
        isOpen={isCreateModalOpen}
        onClose={onCloseCreateModal}
        onSubmit={onSubmitCreateUser}
      />

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={onCloseEditModal}
        user={editUser}
        onSubmit={onSubmitEditUser}
      />
    </PageContainer>
  );
}
