"use client";

import { CommentIcon } from "@/app/icons/CommentIcon";
import { Container, NotificationBadge, PlusSign, NumberText } from "./styles";

interface Props {
  count: number;
}

export function MessageBadge({ count }: Props) {
  const displayContent = () => {
    if (count > 10) {
      return (
        <>
          <PlusSign>+</PlusSign>
          <NumberText>10</NumberText>
        </>
      );
    }
    return <NumberText>{count}</NumberText>;
  };

  return (
    <Container>
      <CommentIcon width={14} height={14} color="#FFFFFF" />
      {count > 0 && (
        <NotificationBadge>
          {displayContent()}
        </NotificationBadge>
      )}
    </Container>
  );
}
