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

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<{
  $hasIcon?: boolean;
  $isPassword?: boolean;
}>`
  width: 100%;
  height: 45px;
  padding: 12px 14px;
  padding-right: ${({ $hasIcon }) => ($hasIcon ? "50px" : "14px")};
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 7px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 400;
  font-size: ${({ $isPassword }) => ($isPassword ? "20px" : "14px")};
  line-height: 20px;
  letter-spacing: ${({ $isPassword }) => ($isPassword ? "2px" : "normal")};
  color: ${({ theme }) => theme.colors.text.primary};
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 14px;
    letter-spacing: normal;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focus};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.interactive.disabled};
    cursor: not-allowed;
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 10px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;
