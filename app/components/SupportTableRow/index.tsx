"use client";

import { useTheme } from "styled-components";
import { getInitials } from "@/app/utils/getInitials";
import { BadgeSelect } from "@/app/components/BadgeSelect";
import { MessageBadge } from "@/app/components/MessageBadge";
import { Text } from "@/app/components/Text";
import {
  Row,
  DateCell,
  AttendantCell,
  TagsCell,
  LastMessageCell,
  NameCell,
  StatusCell,
  Avatar,
  AvatarPlaceholder,
  CustomerInfo,
  MessageText,
} from "./styles";

type RowStatus = "waiting" | "inProgress" | "satisfied";
type TagType = "logistics" | "refund" | "other";

interface CustomerInfoType {
  name: string;
  role: string;
  avatarUrl?: string;
}

interface Props {
  date: string;
  attendant: string;
  attendantOptions: Array<{ value: string; label: string }>;
  onAttendantChange?: (value: string) => void;
  tag: TagType;
  tagOptions: Array<{ value: string; label: string }>;
  onTagChange?: (value: string) => void;
  lastMessage: string;
  messageCount: number;
  customer: CustomerInfoType;
  status: RowStatus;
  statusOptions: Array<{ value: string; label: string }>;
  onStatusChange?: (value: string) => void;
  rowColor: RowStatus;
  onClick?: () => void;
}

export function SupportTableRow({
  date,
  attendant,
  attendantOptions,
  onAttendantChange,
  tag,
  tagOptions,
  onTagChange,
  lastMessage,
  messageCount,
  customer,
  status,
  statusOptions,
  onStatusChange,
  rowColor,
  onClick,
}: Props) {
  const theme = useTheme();

  const tagColors = {
    logistics: theme.colors.tags.logistics,
    refund: theme.colors.tags.refund,
    other: theme.colors.tags.other,
  };

  const statusColors = {
    waiting: theme.colors.status.clienteEmEspera,
    inProgress: theme.colors.status.inProgress,
    satisfied: theme.colors.status.satisfied,
  };

  const handleRowClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("select") || target.closest("button")) {
      return;
    }
    onClick?.();
  };

  return (
    <Row $rowColor={rowColor} $clickable={!!onClick} onClick={handleRowClick}>
      <DateCell $rowColor={rowColor}>
        <Text size="md" color="primary">
          {date}
        </Text>
      </DateCell>

      <AttendantCell $rowColor={rowColor}>
        <BadgeSelect
          value={attendant}
          options={attendantOptions}
          onChange={(e) => onAttendantChange?.(e.target.value)}
          colors={{
            background: theme.colors.background.surface,
            border: theme.colors.border.default,
            text: theme.colors.text.primary,
          }}
        />
      </AttendantCell>

      <TagsCell $rowColor={rowColor}>
        <BadgeSelect
          value={tag}
          options={tagOptions}
          onChange={(e) => onTagChange?.(e.target.value)}
          colors={tagColors[tag]}
        />
      </TagsCell>

      <LastMessageCell $rowColor={rowColor}>
        <MessageBadge count={messageCount} />
        <MessageText title={lastMessage}>{lastMessage}</MessageText>
      </LastMessageCell>

      <NameCell $rowColor={rowColor}>
        {customer.avatarUrl ? (
          <Avatar src={customer.avatarUrl} alt={customer.name} />
        ) : (
          <AvatarPlaceholder>{getInitials(customer.name)}</AvatarPlaceholder>
        )}
        <CustomerInfo>
          <Text size="md" weight="medium" color="primary">
            {customer.name}
          </Text>
          <Text size="sm" color="primary">
            {customer.role}
          </Text>
        </CustomerInfo>
      </NameCell>

      <StatusCell $rowColor={rowColor}>
        <BadgeSelect
          value={status}
          options={statusOptions}
          onChange={(e) => onStatusChange?.(e.target.value)}
          colors={statusColors[status]}
        />
      </StatusCell>
    </Row>
  );
}
