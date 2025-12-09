"use client";

import { Text } from "@/app/components/Text";
import { ChatAvatar } from "@/app/components/ChatAvatar";
import { Container, InfoContent } from "./styles";

interface Props {
  name: string;
  role: string;
  avatarSrc?: string;
  isOnline?: boolean;
}

export function AttendantInfo({ name, role, avatarSrc, isOnline = true }: Props) {
  return (
    <Container>
      <ChatAvatar src={avatarSrc} name={name} isOnline={isOnline} size={40} />
      <InfoContent>
        <Text size="md" weight="medium">
          {name}
        </Text>
        <Text size="sm" weight="regular">
          {role}
        </Text>
      </InfoContent>
    </Container>
  );
}
