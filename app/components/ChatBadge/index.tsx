"use client";

import { Text } from "@/app/components/Text";
import { CommentIcon } from "@/app/icons/CommentIcon";
import { Container, IconWrapper } from "./styles";

export function ChatBadge() {
  return (
    <Container>
      <IconWrapper>
        <CommentIcon width={11} height={11} />
      </IconWrapper>
      <Text size="xs" weight="medium" color="inverse">
        Chat
      </Text>
    </Container>
  );
}
