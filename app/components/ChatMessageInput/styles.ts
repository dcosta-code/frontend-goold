import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 19px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: 0px -20px 20px 10px rgba(0, 0, 0, 0.05);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
  height: 40px;
  padding: 8px 12px;
  padding-right: 15px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

interface AttachButtonProps {
  $hasAction?: boolean;
}

export const AttachButton = styled.button<AttachButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: ${({ $hasAction }) => ($hasAction ? "pointer" : "not-allowed")};
  padding: 0;
  opacity: ${({ $hasAction }) => ($hasAction ? 1 : 0.4)};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: ${({ $hasAction }) => ($hasAction ? 0.7 : 0.4)};
  }
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.interactive.primary};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.interactive.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.interactive.disabledButton};
    cursor: not-allowed;
  }
`;
