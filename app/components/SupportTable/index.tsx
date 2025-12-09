"use client";

import { useState, useMemo } from "react";
import { ArrowsUpDown } from "@/app/icons/ArrowsUpDown";
import { SupportTableRow } from "@/app/components/SupportTableRow";
import { Text } from "@/app/components/Text";
import {
  Container,
  HeaderRow,
  DateHeaderCell,
  AttendantHeaderCell,
  TagsHeaderCell,
  LastMessageHeaderCell,
  NameHeaderCell,
  StatusHeaderCell,
  TableBody,
} from "./styles";

type RowStatus = "waiting" | "inProgress" | "satisfied";
type TagType = "logistics" | "refund" | "other";

interface CustomerInfo {
  name: string;
  role: string;
  avatarUrl?: string;
}

interface TableRow {
  id: string;
  date: string;
  attendant: string;
  tag: TagType;
  lastMessage: string;
  messageCount: number;
  customer: CustomerInfo;
  status: RowStatus;
}

interface Props {
  data: TableRow[];
  attendantOptions: Array<{ value: string; label: string }>;
  tagOptions: Array<{ value: string; label: string }>;
  statusOptions: Array<{ value: string; label: string }>;
  onRowChange?: (id: string, field: string, value: string) => void;
  onRowClick?: (row: TableRow) => void;
}

type SortDirection = "asc" | "desc";

const parseDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
};

export function SupportTable({
  data,
  attendantOptions,
  tagOptions,
  statusOptions,
  onRowChange,
  onRowClick,
}: Props) {
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      if (sortDirection === "asc") {
        return dateA.getTime() - dateB.getTime();
      }
      return dateB.getTime() - dateA.getTime();
    });
  }, [data, sortDirection]);

  const toggleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <Container>
      <HeaderRow>
        <DateHeaderCell onClick={toggleSort}>
          <Text size="sm" weight="medium" color="primary">
            Data
          </Text>
          <ArrowsUpDown width={12} height={12} color="#000000" />
        </DateHeaderCell>

        <AttendantHeaderCell>
          <Text size="sm" weight="medium" color="primary">
            Atendente atribuido
          </Text>
        </AttendantHeaderCell>

        <TagsHeaderCell>
          <Text size="sm" weight="medium" color="primary">
            Tags
          </Text>
        </TagsHeaderCell>

        <LastMessageHeaderCell>
          <Text size="sm" weight="medium" color="primary">
            Ultima mensagem
          </Text>
        </LastMessageHeaderCell>

        <NameHeaderCell>
          <Text size="sm" weight="medium" color="primary">
            Nome
          </Text>
        </NameHeaderCell>

        <StatusHeaderCell>
          <Text size="sm" weight="medium" color="primary">
            Status
          </Text>
        </StatusHeaderCell>
      </HeaderRow>

      <TableBody>
        {sortedData.map((row) => (
          <SupportTableRow
            key={row.id}
            date={row.date}
            attendant={row.attendant}
            attendantOptions={attendantOptions}
            onAttendantChange={(value) =>
              onRowChange?.(row.id, "attendant", value)
            }
            tag={row.tag}
            tagOptions={tagOptions}
            onTagChange={(value) => onRowChange?.(row.id, "tag", value)}
            lastMessage={row.lastMessage}
            messageCount={row.messageCount}
            customer={row.customer}
            status={row.status}
            statusOptions={statusOptions}
            onStatusChange={(value) => onRowChange?.(row.id, "status", value)}
            rowColor={row.status}
            onClick={() => onRowClick?.(row)}
          />
        ))}
      </TableBody>
    </Container>
  );
}
