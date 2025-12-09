"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { EmployeesPageView } from "./view";
import { Employee } from "./components/EmployeesTable";
import {
  useEmployees,
  useCreateEmployee,
  useUpdateEmployee,
  useDeleteEmployee,
} from "../../hooks/useEmployees";
import { EmployeeResponse } from "../../services/employeeService";
import { authStorage } from "../../utils/authStorage";

interface EmployeeWithPermissions extends Employee {
  fullRole: string;
  permissions: string[];
}

function transformEmployee(employee: EmployeeResponse): EmployeeWithPermissions {
  const isAdmin = employee.roles.some(
    (r) => r.toLowerCase() === "admin" || r.toLowerCase() === "administrador"
  );

  return {
    id: employee.externalId,
    name: employee.fullName,
    email: employee.email,
    role: isAdmin ? "Administrador" : "Suporte",
    fullRole: employee.roles.join(", ") || "Sem cargo",
    permission: isAdmin ? "Acesso total" : "Suporte",
    active: employee.isActive,
    avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      employee.fullName
    )}&background=random`,
    permissions: employee.permissions || [],
  };
}

export default function EmployeesPage() {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] =
    useState<EmployeeWithPermissions | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const { data: employees = [], isLoading, isError } = useEmployees(
    debouncedSearch || undefined
  );
  const createMutation = useCreateEmployee();
  const updateMutation = useUpdateEmployee();
  const deleteMutation = useDeleteEmployee();

  useEffect(() => {
    setCurrentUserId(authStorage.getCurrentUserId());
  }, []);

  const transformedEmployees = useMemo(() => {
    return employees.map(transformEmployee);
  }, [employees]);

  const handleDebouncedSearch = useCallback((value: string) => {
    setDebouncedSearch(value);
  }, []);

  const handleToggleStatus = useCallback(
    (id: string, active: boolean) => {
      updateMutation.mutate({
        externalId: id,
        data: { isActive: active },
      });
    },
    [updateMutation]
  );

  const handleCreateUser = useCallback(() => {
    setIsCreateModalOpen(true);
  }, []);

  const handleCloseCreateModal = useCallback(() => {
    setIsCreateModalOpen(false);
  }, []);

  const handleSubmitCreateUser = useCallback(
    (data: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      employeeType: string;
      photo: string | null;
      permissions: string[];
    }) => {
      createMutation.mutate(
        {
          email: data.email,
          password: data.password,
          fullName: data.name,
          roles: [data.employeeType],
          permissions: data.permissions,
        },
        {
          onSuccess: () => {
            setIsCreateModalOpen(false);
          },
        }
      );
    },
    [createMutation]
  );

  const handleRowClick = useCallback(
    (employee: Employee) => {
      const fullEmployee = transformedEmployees.find((e) => e.id === employee.id);
      if (fullEmployee) {
        setSelectedEmployee(fullEmployee);
        setIsModalOpen(true);
      }
    },
    [transformedEmployees]
  );

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  }, []);

  const handleDeleteUser = useCallback(
    (userId: string) => {
      deleteMutation.mutate(userId, {
        onSuccess: () => {
          handleCloseModal();
        },
      });
    },
    [deleteMutation, handleCloseModal]
  );

  const handleEditUser = useCallback(() => {
    setIsModalOpen(false);
    setIsEditModalOpen(true);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setIsEditModalOpen(false);
    setSelectedEmployee(null);
  }, []);

  const handleSubmitEditUser = useCallback(
    (data: {
      id: string;
      name: string;
      email: string;
      employeeType: string;
      photo: string | null;
      permissions: string[];
      password?: string;
    }) => {
      const updateData: {
        email?: string;
        fullName?: string;
        roles?: string[];
        permissions?: string[];
        password?: string;
      } = {
        email: data.email,
        fullName: data.name,
        roles: [data.employeeType],
        permissions: data.permissions,
      };

      if (data.password) {
        updateData.password = data.password;
      }

      updateMutation.mutate(
        {
          externalId: data.id,
          data: updateData,
        },
        {
          onSuccess: () => {
            setIsEditModalOpen(false);
            setSelectedEmployee(null);
          },
        }
      );
    },
    [updateMutation]
  );

  const handleResetCode = useCallback((userId: string) => {
    console.log("Reset code for user:", userId);
  }, []);

  const modalUser = useMemo(
    () =>
      selectedEmployee
        ? {
            id: selectedEmployee.id,
            name: selectedEmployee.name,
            email: selectedEmployee.email,
            role: selectedEmployee.fullRole,
            permissions: selectedEmployee.permissions,
          }
        : null,
    [selectedEmployee]
  );

  const editUser = useMemo(
    () =>
      selectedEmployee
        ? {
            id: selectedEmployee.id,
            name: selectedEmployee.name,
            email: selectedEmployee.email,
            employeeType:
              selectedEmployee.role === "Administrador" ? "admin" : "support",
            photo: selectedEmployee.avatarUrl,
            permissions: selectedEmployee.permissions,
          }
        : null,
    [selectedEmployee]
  );

  return (
    <EmployeesPageView
      employees={transformedEmployees}
      isModalOpen={isModalOpen}
      isCreateModalOpen={isCreateModalOpen}
      isEditModalOpen={isEditModalOpen}
      modalUser={modalUser}
      editUser={editUser}
      isLoading={isLoading}
      isError={isError}
      currentUserId={currentUserId}
      onDebouncedSearch={handleDebouncedSearch}
      onToggleStatus={handleToggleStatus}
      onCreateUser={handleCreateUser}
      onRowClick={handleRowClick}
      onCloseModal={handleCloseModal}
      onCloseCreateModal={handleCloseCreateModal}
      onCloseEditModal={handleCloseEditModal}
      onDeleteUser={handleDeleteUser}
      onEditUser={handleEditUser}
      onResetCode={handleResetCode}
      onSubmitCreateUser={handleSubmitCreateUser}
      onSubmitEditUser={handleSubmitEditUser}
    />
  );
}
