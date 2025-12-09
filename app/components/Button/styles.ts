import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "danger";
export type ButtonSize = "small" | "medium";

interface StyledButtonProps {
  $variant: ButtonVariant;
  $fullWidth: boolean;
  $size: ButtonSize;
}

const sizeStyles = {
  small: css`
    height: 32px;
    padding: 8px 12px;
  `,
  medium: css`
    height: 44px;
    padding: 10px 16px;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${({ $size }) => sizeStyles[$size]}
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  ${({ $variant, theme }) =>
    $variant === "danger"
      ? css`
          background-color: ${theme.colors.interactive.dangerBackground};
          border: 1px solid ${theme.colors.interactive.danger};
        `
      : css`
          background-color: ${theme.colors.interactive.primary};
          border: 1px solid ${theme.colors.interactive.primary};

          &:hover {
            background-color: ${theme.colors.interactive.primaryHover};
          }
        `}

  &:active {
    opacity: 0.9;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.interactive.disabledButton};
    border-color: ${({ theme }) => theme.colors.interactive.disabledButton};
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.colors.interactive.disabledButton};
    }
  }
`;
