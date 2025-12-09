"use client";

import { Text } from "@/app/components/Text";
import {
  Container,
  EmojiIcon,
  StatusContent,
  StatusRow,
  StatusDot,
} from "./styles";

export function TeamStatusOffline() {
  return (
    <Container>
      <EmojiIcon src="/images/sleeping-face.png" alt="Equipe Offline" />
      <StatusContent>
        <StatusRow>
          <Text size="md" weight="medium">
            Equipe Offline
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
