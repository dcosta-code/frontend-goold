import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 12px 10px 42px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 60px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focus};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.interactive.disabled};
    cursor: not-allowed;
  }
`;
