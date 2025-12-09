import { useMutation } from "@tanstack/react-query";
import { registerCustomer, RegisterRequest, CustomerResponse } from "@/app/services/authService";

export function useCustomerRegister() {
  return useMutation<CustomerResponse, Error, RegisterRequest>({
    mutationFn: registerCustomer,
  });
}
