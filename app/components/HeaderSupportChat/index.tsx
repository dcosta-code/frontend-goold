"use client";

import { useTheme } from "styled-components";
import { CloseIcon } from "@/app/icons/CloseIcon";
import { ChevronLeftIcon } from "@/app/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/app/icons/ChevronRightIcon";
import { BadgeSelect } from "../BadgeSelect";
import { ChatAvatar } from "../ChatAvatar";
import { Text } from "../Text";
import {
  Container,
  LeftSection,
  CloseButton,
  RightSection,
  UserBadge,
  PaginationContainer,
  PaginationButton,
  PaginationCounter,
} from "./styles";

interface TagOption {
  value: string;
  label: string;
}

interface StatusOption {
  value: string;
  label: string;
}

interface Props {
  title?: string;
  onClose: () => void;
  tagValue: string;
  tagOptions: TagOption[];
  onTagChange: (value: string) => void;
  userName: string;
  userAvatarSrc: string;
  userIsOnline?: boolean;
  statusValue: string;
  statusOptions: StatusOption[];
  onStatusChange: (value: string) => void;
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

export function HeaderSupportChat({
  title = "Detalhes do Ticket",
  onClose,
  tagValue,
  tagOptions,
  onTagChange,
  userName,
  userAvatarSrc,
  userIsOnline = false,
  statusValue,
  statusOptions,
  onStatusChange,
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}: Props) {
  const theme = useTheme();

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onTagChange(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(e.target.value);
  };

  return (
    <Container>
      <LeftSection>
        <CloseButton onClick={onClose} aria-label="Fechar">
          <CloseIcon width={23} height={24} />
        </CloseButton>
        <Text size="xl" weight="medium" as="h1" color="primary">
          {title}
        </Text>
      </LeftSection>

      <RightSection>
        <BadgeSelect
          value={tagValue}
          options={tagOptions}
          onChange={handleTagChange}
          colors={{
            background: theme.colors.tags.refund.background,
            border: theme.colors.tags.refund.border,
            text: theme.colors.tags.refund.text,
          }}
        />

        <UserBadge>
          <ChatAvatar src={userAvatarSrc} isOnline={userIsOnline} size={20} />
          <Text size="sm" weight="medium">
            {userName}
          </Text>
        </UserBadge>

        <BadgeSelect
          value={statusValue}
          options={statusOptions}
          onChange={handleStatusChange}
          colors={{
            background: theme.colors.status.clienteEmEspera.background,
            border: theme.colors.status.clienteEmEspera.border,
            text: theme.colors.status.clienteEmEspera.text,
          }}
        />

        <PaginationContainer>
          <PaginationButton
            onClick={onPrevPage}
            disabled={currentPage <= 1}
            aria-label="Página anterior"
          >
            <ChevronLeftIcon
              width={8}
              height={8}
              color={theme.colors.text.inverse}
            />
          </PaginationButton>

          <PaginationCounter>
            <Text size="sm" weight="medium">
              {currentPage}/{totalPages}
            </Text>
          </PaginationCounter>

          <PaginationButton
            onClick={onNextPage}
            disabled={currentPage >= totalPages}
            aria-label="Próxima página"
          >
            <ChevronRightIcon
              width={8}
              height={8}
              color={theme.colors.text.inverse}
            />
          </PaginationButton>
        </PaginationContainer>
      </RightSection>
    </Container>
  );
}
