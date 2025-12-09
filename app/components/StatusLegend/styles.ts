import styled from "styled-components";

export type StatusColor = "waiting" | "responded" | "delayed";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

interface ColorDotProps {
  $color: StatusColor;
}

export const ColorDot = styled.div<ColorDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid ${({ $color, theme }) => theme.colors.status[$color].border};
  background-color: transparent;
`;
