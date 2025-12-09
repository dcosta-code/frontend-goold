"use client";

import { Text } from "@/app/components/Text";
import {
  Container,
  EmojiIcon,
  StatusContent,
  StatusRow,
  StatusDot,
} from "./styles";

export function TeamStatusOnline() {
  return (
    <Container>
      <EmojiIcon src="/images/sleeping-face-1.png" alt="Equipe Online" />
      <StatusContent>
        <StatusRow>
          <Text size="md" weight="medium">
            Equipe Online
          </Text>
          <StatusDot />
        </StatusRow>
        <Text size="sm" weight="regular">
          Seg a Sáb, das 08h às 16h
        </Text>
      </StatusContent>
    </Container>
  );
}
