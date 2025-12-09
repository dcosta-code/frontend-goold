"use client";

import { Text } from "@/app/components/Text";
import { Container, EmojiIcon, StatusContent } from "./styles";

export function TeamStatusLunch() {
  return (
    <Container>
      <EmojiIcon src="/images/bibimbap.png" alt="Horário de almoço" />
      <StatusContent>
        <Text size="md" weight="medium">
          Em horário de almoço
        </Text>
        <Text size="sm" weight="regular">
          Seg a Sáb, das 12 às 13h
        </Text>
      </StatusContent>
    </Container>
  );
}
