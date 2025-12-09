"use client";

import { getInitials } from "@/app/utils/getInitials";
import { Container, Avatar, OnlineIndicator, InitialsPlaceholder } from "./styles";

interface Props {
  src?: string | null;
  name?: string;
  isOnline?: boolean;
  size?: number;
}

export function ChatAvatar({ src, name, isOnline, size = 40 }: Props) {
  const indicatorSize = Math.round(size * 0.175);
  const showImage = src && src.trim() !== "";

  return (
    <Container $size={size}>
      {showImage ? (
        <Avatar src={src} $size={size} />
      ) : (
        <InitialsPlaceholder $size={size}>
          {name ? getInitials(name) : ""}
        </InitialsPlaceholder>
      )}
      {isOnline && <OnlineIndicator $size={indicatorSize} />}
    </Container>
  );
}
