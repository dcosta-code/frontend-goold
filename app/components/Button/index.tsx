"use client";

import { Text } from "../Text";
import { StyledButton, ButtonVariant, ButtonSize } from "./styles";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  size?: ButtonSize;
}

export function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  fullWidth = true,
  size = "medium",
}: Props) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $fullWidth={fullWidth}
      $size={size}
    >
      <Text
        size={size === "small" ? "md" : "lg"}
        weight={size === "small" ? "medium" : "semibold"}
        color={variant === "danger" ? "error" : "inverse"}
      >
        {children}
      </Text>
    </StyledButton>
  );
}
