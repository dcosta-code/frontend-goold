import styled, { css } from "styled-components";

interface ContainerProps {
  $variant: "outlined" | "filled";
  $clickable?: boolean;
  $active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 15px;
  border-radius: 100px;
  transition: all 0.2s ease;

  ${({ $variant, $active = true, theme }) =>
    $variant === "filled"
      ? css`
          background-color: ${$active
            ? theme.colors.interactive.primary
            : theme.colors.background.surface};
          border: 1px solid ${$active
            ? theme.colors.interactive.primary
            : theme.colors.border.default};
        `
      : css`
          background-color: ${$active
            ? theme.colors.background.primary
            : theme.colors.background.surface};
          border: 1px solid ${$active
            ? theme.colors.interactive.primary
            : theme.colors.border.default};
        `}

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    `}
`;
