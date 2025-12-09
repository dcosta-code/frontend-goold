"use client";

import { memo } from "react";
import { Text } from "../../../../components/Text";
import { Toggle } from "../../../../components/Toggle";
import { Badge } from "../../../../components/Badge";
import { getPermissionBadges } from "@/app/constants/permissions";
import {
  Container,
  TableWrapper,
  Table,
  TableHeaderRow,
  TableHeader,
  TableRow,
  TableCell,
  TableCellCentered,
  EmployeeInfo,
  Avatar,
  BadgeGroup,
} from "./styles";

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  permission: string;
  permissions?: string[];
  active: boolean;
  avatarUrl: string;
}

interface Props {
  employees: Employee[];
  onToggleStatus?: (id: string, active: boolean) => void;
  onRowClick?: (employee: Employee) => void;
}

export const EmployeesTable = memo(function EmployeesTable({
  employees,
  onToggleStatus,
  onRowClick,
}: Props) {
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
          {employees.map((employee) => (
            <TableRow key={employee.id} onClick={() => onRowClick?.(employee)}>
              <TableCell $width="245px">
                <EmployeeInfo>
                  <Avatar src={employee.avatarUrl} alt={employee.name} />
                  <Text
                    size="md"
                    weight="regular"
                    color="primary"
                    lineHeight="22px"
                  >
                    {employee.name}
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
                  {employee.email}
                </Text>
              </TableCell>
              <TableCell $flex={1}>
                <Text
                  size="md"
                  weight="regular"
                  color="primary"
                  lineHeight="22px"
                >
                  {employee.role}
                </Text>
              </TableCell>
              <TableCell $flex={1}>
                <BadgeGroup>
                  {getPermissionBadges(employee.permissions || []).map(
                    (badge) => (
                      <Badge key={badge}>{badge}</Badge>
                    )
                  )}
                </BadgeGroup>
              </TableCell>
              <TableCellCentered
                onClick={(e) => handleToggle(e, employee.id, employee.active)}
              >
                <Toggle checked={employee.active} />
              </TableCellCentered>
            </TableRow>
          ))}
        </Table>
      </TableWrapper>
    </Container>
  );
});
