"use client";

import { useState } from "react";
import { Text } from "../Text";
import { SearchBar } from "../SearchBar";
import { Button } from "../Button";
import { Toggle } from "../Toggle";
import { Badge } from "../Badge";
import {
  Container,
  HeaderRow,
  SearchWrapper,
  ButtonWrapper,
  TableWrapper,
  Table,
  TableHeaderRow,
  TableHeader,
  TableRow,
  TableCell,
  TableCellCentered,
  EmployeeInfo,
  Avatar,
} from "./styles";

export interface Customer {
  id: string;
  name: string;
  email: string;
  role: string;
  permission: string;
  active: boolean;
  avatarUrl: string;
}

interface Props {
  customers: Customer[];
  onCreateUser?: () => void;
  onToggleStatus?: (id: string, active: boolean) => void;
  onSearch?: (value: string) => void;
  onRowClick?: (customer: Customer) => void;
  searchValue?: string;
}

export function CustomersTable({
  customers,
  onCreateUser,
  onToggleStatus,
  onSearch,
  onRowClick,
  searchValue = "",
}: Props) {
  const [localSearch, setLocalSearch] = useState(searchValue);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    onSearch?.(value);
  };

  const handleToggle = (
    e: React.MouseEvent,
    id: string,
    currentStatus: boolean
  ) => {
    e.stopPropagation();
    onToggleStatus?.(id, !currentStatus);
  };

  return (
    <Container>
      <HeaderRow>
        <SearchWrapper>
          <SearchBar
            value={localSearch}
            onChange={handleSearchChange}
            placeholder="Filtre por nome, e-mail ou tipo de funcionário"
          />
        </SearchWrapper>
        <ButtonWrapper>
          <Button onClick={onCreateUser}>Criar usuário</Button>
        </ButtonWrapper>
      </HeaderRow>
      <TableWrapper>
        <Table>
          <TableHeaderRow>
            <TableHeader $width="245px">
              <Text size="sm" weight="medium" color="primary">
                Nome funcionário
              </Text>
            </TableHeader>
            <TableHeader $width="296px">
              <Text size="sm" weight="medium" color="primary">
                E-mail
              </Text>
            </TableHeader>
            <TableHeader $flex={1}>
              <Text size="sm" weight="medium" color="primary">
                Tipo de funcionário
              </Text>
            </TableHeader>
            <TableHeader $flex={1}>
              <Text size="sm" weight="medium" color="primary">
                Permissões
              </Text>
            </TableHeader>
            <TableHeader>
              <Text size="sm" weight="medium" color="primary">
                Status
              </Text>
            </TableHeader>
          </TableHeaderRow>
          {customers.map((customer) => (
            <TableRow key={customer.id} onClick={() => onRowClick?.(customer)}>
              <TableCell $width="245px">
                <EmployeeInfo>
                  <Avatar src={customer.avatarUrl} alt={customer.name} />
                  <Text
                    size="md"
                    weight="regular"
                    color="primary"
                    lineHeight="22px"
                  >
                    {customer.name}
                  </Text>
                </EmployeeInfo>
              </TableCell>
              <TableCell $width="296px">
                <Text
                  size="md"
                  weight="regular"
                  color="primary"
                  lineHeight="22px"
                >
                  {customer.email}
                </Text>
              </TableCell>
              <TableCell $flex={1}>
                <Text
                  size="md"
                  weight="regular"
                  color="primary"
                  lineHeight="22px"
                >
                  {customer.role}
                </Text>
              </TableCell>
              <TableCell $flex={1}>
                <Badge>{customer.permission}</Badge>
              </TableCell>
              <TableCellCentered
                onClick={(e) => handleToggle(e, customer.id, customer.active)}
              >
                <Toggle checked={customer.active} />
              </TableCellCentered>
            </TableRow>
          ))}
        </Table>
      </TableWrapper>
    </Container>
  );
}
