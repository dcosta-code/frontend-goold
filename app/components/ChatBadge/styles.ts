import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 60px;
  height: 20px;
  min-width: 60px;
  min-height: 20px;
  flex-shrink: 0;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.interactive.primary};
  border-radius: 60px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11px;
  height: 11px;
`;
