import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 0 20px;
  flex: 1;
`;

export const Illustration = styled.img`
  width: 245px;
  height: 100px;
  object-fit: contain;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  max-width: 400px;
`;

export const HighlightText = styled.span`
  font-weight: 700;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 25px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const SubmitButton = styled.button<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: ${({ theme, $disabled }) =>
    $disabled
      ? theme.colors.interactive.disabledButton
      : theme.colors.interactive.primary};
  border: none;
  border-radius: 10px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme, $disabled }) =>
      $disabled
        ? theme.colors.interactive.disabledButton
        : theme.colors.interactive.primaryHover};
  }
`;

export const CloseLink = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
`;
