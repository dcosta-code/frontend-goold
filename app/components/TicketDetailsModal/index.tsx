"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { HeaderSupportChat } from "../HeaderSupportChat";
import { SupportChat } from "../SupportChat";
import { Container, HeaderWrapper, ChatWrapper, getModalStyles } from "./styles";

interface MessageData {
  id: string;
  senderName: string;
  message: string;
  avatarSrc: string;
  isOnline?: boolean;
  timestamp: string;
  position: "left" | "right";
}

interface TicketData {
  id: string;
  tagValue: string;
  userName: string;
  userAvatarSrc: string;
  userIsOnline?: boolean;
  statusValue: string;
  messages: MessageData[];
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  ticket: TicketData | null;
  currentIndex: number;
  totalTickets: number;
  onPrevTicket: () => void;
  onNextTicket: () => void;
  tagOptions: Array<{ value: string; label: string }>;
  statusOptions: Array<{ value: string; label: string }>;
  onTagChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onSendMessage: (content: string) => void;
}

export function TicketDetailsModal({
  isOpen,
  onClose,
  ticket,
  currentIndex,
  totalTickets,
  onPrevTicket,
  onNextTicket,
  tagOptions,
  statusOptions,
  onTagChange,
  onStatusChange,
  onSendMessage,
}: Props) {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!ticket) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={getModalStyles(theme)}
      ariaHideApp={false}
    >
      <Container>
        <HeaderWrapper>
          <HeaderSupportChat
            onClose={onClose}
            tagValue={ticket.tagValue}
            tagOptions={tagOptions}
            onTagChange={onTagChange}
            userName={ticket.userName}
            userAvatarSrc={ticket.userAvatarSrc}
            userIsOnline={ticket.userIsOnline}
            statusValue={ticket.statusValue}
            statusOptions={statusOptions}
            onStatusChange={onStatusChange}
            currentPage={currentIndex + 1}
            totalPages={totalTickets}
            onPrevPage={onPrevTicket}
            onNextPage={onNextTicket}
          />
        </HeaderWrapper>
        <ChatWrapper>
          <SupportChat
            messages={ticket.messages}
            onSendMessage={onSendMessage}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            dateValue={dateValue}
            onDateChange={setDateValue}
          />
        </ChatWrapper>
      </Container>
    </Modal>
  );
}

export type { TicketData, MessageData };
