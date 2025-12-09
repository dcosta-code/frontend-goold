import styled from "styled-components";

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
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.text.primary};
`;
