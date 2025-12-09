"use client";

import { Text } from "../Text";
import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
  variant?: "outlined" | "filled";
  onClick?: () => void;
  active?: boolean;
}

export function Badge({
  children,
  variant = "outlined",
  onClick,
  active = true,
}: Props) {
  const isClickable = !!onClick;

  const getTextColor = () => {
    if (variant === "filled") {
      return active ? "inverse" : "primary";
    }
    return "primary";
  };

  return (
    <Container
      $variant={variant}
      $clickable={isClickable}
      $active={active}
      onClick={onClick}
    >
      <Text size="sm" weight="medium" color={getTextColor()}>
        {children}
      </Text>
    </Container>
  );
}
