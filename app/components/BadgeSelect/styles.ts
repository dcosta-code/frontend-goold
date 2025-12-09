import styled from "styled-components";

interface ContainerProps {
  $backgroundColor: string;
  $borderColor: string;
}

interface TextProps {
  $textColor: string;
  $maxWidth?: number;
}

interface IconProps {
  $iconColor: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 100px;
  padding: 5px 15px;
  cursor: pointer;
  width: fit-content;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.span<TextProps>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ $textColor }) => $textColor};
  white-space: nowrap;
  ${({ $maxWidth }) =>
    $maxWidth &&
    `
    max-width: ${$maxWidth}px;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export const IconWrapper = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg path {
    stroke: ${({ $iconColor }) => $iconColor};
  }
`;

export const HiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
