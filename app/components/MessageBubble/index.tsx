"use client";

import { Text } from "@/app/components/Text";
import { Container, MessageContent } from "./styles";

interface Props {
  senderName: string;
  message: string;
}

export function MessageBubble({ senderName, message }: Props) {
  return (
    <Container>
      <Text size="md" weight="medium">
        {senderName}
      </Text>
      <MessageContent dangerouslySetInnerHTML={{ __html: message }} />
    </Container>
  );
}
