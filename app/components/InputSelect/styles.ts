import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 45px;
  padding: 10px 35px 10px 14px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 7px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  color: ${({ theme }) => theme.colors.text.primary};
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focus};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.interactive.disabled};
    cursor: not-allowed;
  }
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
