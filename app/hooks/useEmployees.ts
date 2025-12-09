import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  EmployeeResponse,
  CreateEmployeeRequest,
  UpdateEmployeeRequest,
} from "@/app/services/employeeService";

const EMPLOYEES_QUERY_KEY = "employees";

export function useEmployees(search?: string) {
  return useQuery<EmployeeResponse[]>({
    queryKey: [EMPLOYEES_QUERY_KEY, search],
    queryFn: () => getEmployees(search),
  });
}

export function useEmployee(externalId: string) {
  return useQuery<EmployeeResponse>({
    queryKey: [EMPLOYEES_QUERY_KEY, externalId],
    queryFn: () => getEmployee(externalId),
    enabled: !!externalId,
  });
}

export function useCreateEmployee() {
  const queryClient = useQueryClient();

  return useMutation<EmployeeResponse, Error, CreateEmployeeRequest>({
    mutationFn: createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EMPLOYEES_QUERY_KEY] });
    },
    onError: () => {
      toast.error("Não foi possível criar o usuário");
    },
  });
}

export function useUpdateEmployee() {
  const queryClient = useQueryClient();

  return useMutation<
    EmployeeResponse,
    Error,
    { externalId: string; data: UpdateEmployeeRequest }
  >({
    mutationFn: ({ externalId, data }) => updateEmployee(externalId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EMPLOYEES_QUERY_KEY] });
    },
    onError: () => {
      toast.error("Não foi possível atualizar o usuário");
    },
  });
}

export function useDeleteEmployee() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EMPLOYEES_QUERY_KEY] });
    },
    onError: () => {
      toast.error("Não foi possível excluir o usuário");
    },
  });
}
