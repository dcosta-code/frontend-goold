import styled from "styled-components";

interface StatusDotProps {
  $isOnline: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const EmojiIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export const StatusContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const StatusDot = styled.div<StatusDotProps>`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ theme, $isOnline }) =>
    $isOnline ? theme.colors.status.online : theme.colors.text.primary};
`;
