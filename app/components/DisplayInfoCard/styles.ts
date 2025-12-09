import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  min-width: 0;
  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const Value = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  letter-spacing: -0.36px;
`;
