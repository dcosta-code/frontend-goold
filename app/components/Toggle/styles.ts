import styled from "styled-components";

interface ContainerProps {
  $checked: boolean;
}

export const Container = styled.button<ContainerProps>`
  position: relative;
  width: 35px;
  height: 16px;
  padding: 0;
  border: none;
  border-radius: 60px;
  background-color: ${({ $checked, theme }) =>
    $checked ? theme.colors.interactive.primary : theme.colors.interactive.toggleOff};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Knob = styled.div<ContainerProps>`
  position: absolute;
  top: 2px;
  left: ${({ $checked }) => ($checked ? "21px" : "3px")};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.surface};
  transition: left 0.2s ease;
`;
