import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const InputWrapper = styled.div<{ $disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  gap: 13px;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.background.secondary : theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.border.default : theme.colors.border.focus};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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

  &:disabled {
    cursor: not-allowed;
  }
`;
