import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 186px;
`;

interface StyledInputProps {
  $hasValue: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 40px;
  padding: 10px 40px 10px 14px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 60px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${({ $hasValue, theme }) =>
    $hasValue ? theme.colors.text.primary : "transparent"};
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  cursor: pointer;

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focus};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.interactive.disabled};
    cursor: not-allowed;
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

interface PlaceholderProps {
  $visible: boolean;
}

export const Placeholder = styled.span<PlaceholderProps>`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.placeholder};
  pointer-events: none;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
