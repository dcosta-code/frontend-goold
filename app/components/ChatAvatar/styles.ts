import styled from "styled-components";

interface SizeProps {
  $size: number;
}

interface OnlineIndicatorProps {
  $size: number;
}

export const Container = styled.div<SizeProps>`
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  flex-shrink: 0;
`;

export const Avatar = styled.img<SizeProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 100px;
  object-fit: cover;
`;

export const OnlineIndicator = styled.div<OnlineIndicatorProps>`
  position: absolute;
  bottom: 1px;
  right: 3px;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.status.online};
`;

interface InitialsPlaceholderProps {
  $size: number;
}

export const InitialsPlaceholder = styled.div<InitialsPlaceholderProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: ${({ $size }) => $size * 0.4}px;
  color: ${({ theme }) => theme.colors.text.primary};
`;
