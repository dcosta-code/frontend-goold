"use client";

import { Text } from "@/app/components/Text";
import { ChatAvatar } from "@/app/components/ChatAvatar";
import { MessageBubble } from "@/app/components/MessageBubble";
import { EmailMessageBubble } from "@/app/components/EmailMessageBubble";
import { ChannelBadge } from "@/app/components/ChannelBadge";
import { Container, ContentColumn, MetadataRow } from "./styles";

type ChannelType = "whatsapp" | "chat" | "email";

interface SignatureProps {
  name: string;
  role: string;
  logoSrc?: string;
}

interface Props {
  senderName: string;
  message: string;
  avatarSrc: string;
  isOnline?: boolean;
  timestamp: string;
  position?: "left" | "right";
  channel?: ChannelType;
  subject?: string;
  signature?: SignatureProps;
  onClick?: () => void;
}

export function Message({
  senderName,
  message,
  avatarSrc,
  isOnline,
  timestamp,
  position = "right",
  channel = "chat",
  subject,
  signature,
  onClick,
}: Props) {
  const isEmailStyle = channel === "email" && subject;

  return (
    <Container $position={position} onClick={onClick}>
      <ChatAvatar src={avatarSrc} name={senderName} isOnline={isOnline} />
      <ContentColumn>
        {isEmailStyle ? (
          <EmailMessageBubble
            senderName={senderName}
            subject={subject}
            message={message}
            signature={signature}
          />
        ) : (
          <MessageBubble senderName={senderName} message={message} />
        )}
        <MetadataRow>
          <ChannelBadge channel={channel} />
          <Text size="sm" weight="medium">
            {timestamp}
          </Text>
        </MetadataRow>
      </ContentColumn>
    </Container>
  );
}
