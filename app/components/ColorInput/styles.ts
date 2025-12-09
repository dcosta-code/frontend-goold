import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 125px;
  height: 45px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 45px 10px 12px;
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
  text-transform: uppercase;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
    text-transform: none;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focus};
  }
`;

interface ColorPreviewProps {
  $color: string;
}

export const ColorPreview = styled.div<ColorPreviewProps>`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: ${({ $color }) => $color || "#FFFFFF"};
  pointer-events: none;
`;
