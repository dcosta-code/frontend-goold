"use client";

import { ChatHeader } from "@/app/components/ChatHeader";
import { TeamStatusOnline } from "@/app/components/TeamStatusOnline";
import { TeamStatusOffline } from "@/app/components/TeamStatusOffline";
import { TeamStatusLunch } from "@/app/components/TeamStatusLunch";
import { AttendantInfo } from "@/app/components/AttendantInfo";
import { ChatEmptyState } from "@/app/components/ChatEmptyState";
import { Message } from "@/app/components/Message";
import { ChatMessageInput } from "@/app/components/ChatMessageInput";
import {
  Container,
  ChatContent,
  MessageList,
  EmptyStateWrapper,
  LoadingWrapper,
  LoadingSpinner,
  MessageStatusWrapper,
  SendingIndicator,
  ErrorIndicator,
  RetryButton,
} from "./styles";

type ChannelType = "whatsapp" | "chat" | "email";
type MessageStatus = "sending" | "sent" | "error";

interface SignatureProps {
  name: string;
  role: string;
  logoSrc?: string;
}

interface ChatMessage {
  id: string;
  senderName: string;
  message: string;
  avatarSrc: string;
  isOnline?: boolean;
  timestamp: string;
  position: "left" | "right";
  channel: ChannelType;
  subject?: string;
  signature?: SignatureProps;
  status?: MessageStatus;
}

interface Attendant {
  name: string;
  role: string;
  avatarSrc?: string;
  isOnline?: boolean;
}

interface Props {
  messages: ChatMessage[];
  inputValue: string;
  isTeamOnline: boolean;
  isLunchTime: boolean;
  isLoading?: boolean;
  attendant: Attendant | null;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onBack: () => void;
  onAttach: () => void;
  onRetry?: (id: string) => void;
}

function TeamStatusBadge({
  isTeamOnline,
  isLunchTime,
}: {
  isTeamOnline: boolean;
  isLunchTime: boolean;
}) {
  if (isLunchTime) {
    return <TeamStatusLunch />;
  }
  if (isTeamOnline) {
    return <TeamStatusOnline />;
  }
  return <TeamStatusOffline />;
}

function MessageStatusIndicator({
  status,
  onRetry,
}: {
  status?: MessageStatus;
  onRetry?: () => void;
}) {
  if (!status || status === "sent") return null;

  if (status === "sending") {
    return (
      <MessageStatusWrapper>
        <SendingIndicator>Enviando...</SendingIndicator>
      </MessageStatusWrapper>
    );
  }

  if (status === "error") {
    return (
      <MessageStatusWrapper>
        <ErrorIndicator>Falha ao enviar</ErrorIndicator>
        {onRetry && (
          <RetryButton onClick={onRetry}>Tentar novamente</RetryButton>
        )}
      </MessageStatusWrapper>
    );
  }

  return null;
}

export function ChatPageView({
  messages,
  inputValue,
  isTeamOnline,
  isLunchTime,
  isLoading,
  attendant,
  onInputChange,
  onSend,
  onBack,
  onAttach,
  onRetry,
}: Props) {
  const hasMessages = messages.length > 0;

  return (
    <Container>
      <ChatHeader
        title="Chat Goold"
        onBack={onBack}
        rightContent={
          attendant ? (
            <AttendantInfo
              name={attendant.name}
              role={attendant.role}
              avatarSrc={attendant.avatarSrc}
              isOnline={attendant.isOnline}
            />
          ) : (
            <TeamStatusBadge
              isTeamOnline={isTeamOnline}
              isLunchTime={isLunchTime}
            />
          )
        }
      />

      <ChatContent>
        {isLoading ? (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        ) : hasMessages ? (
          <MessageList>
            {messages.map((msg) => (
              <div key={msg.id}>
                <Message
                  senderName={msg.senderName}
                  message={msg.message}
                  avatarSrc={msg.avatarSrc}
                  isOnline={msg.isOnline}
                  timestamp={msg.timestamp}
                  position={msg.position}
                  channel={msg.channel}
                  subject={msg.subject}
                  signature={msg.signature}
                />
                <MessageStatusIndicator
                  status={msg.status}
                  onRetry={onRetry ? () => onRetry(msg.id) : undefined}
                />
              </div>
            ))}
          </MessageList>
        ) : (
          <EmptyStateWrapper>
            <ChatEmptyState
              imageSrc="/images/unicorn.png"
              title="Nenhum histórico de suporte iniciado :)"
              description="Envie sua dúvida, problema ou sugestão e nossa equipe de Experiência do Cliente vai te responder o mais rápido possível!"
            />
          </EmptyStateWrapper>
        )}
      </ChatContent>

      <ChatMessageInput
        value={inputValue}
        onChange={onInputChange}
        onSend={onSend}
        onAttach={onAttach}
      />
    </Container>
  );
}
