"use client";

import { Text } from "@/app/components/Text";
import {
  Container,
  EmojiIcon,
  StatusContent,
  StatusRow,
  StatusDot,
} from "./styles";

interface Props {
  isOnline: boolean;
  schedule?: string;
}

export function TeamStatusBadge({ isOnline, schedule }: Props) {
  return (
    <Container>
      <EmojiIcon
        src={isOnline ? "/images/happy-face.png" : "/images/sleeping-face.png"}
        alt={isOnline ? "Online" : "Offline"}
      />
      <StatusContent>
        <StatusRow>
          <Text size="md" weight="medium">
            {isOnline ? "Equipe Online" : "Equipe Offline"}
          </Text>
          <StatusDot $isOnline={isOnline} />
        </StatusRow>
        {schedule && (
          <Text size="sm" weight="regular">
            {schedule}
          </Text>
        )}
      </StatusContent>
    </Container>
  );
}
