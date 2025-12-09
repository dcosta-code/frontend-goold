import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface StarButtonProps {
  $disabled?: boolean;
}

export const StarButton = styled.button<StarButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  padding: 0;
  transition: transform 0.15s ease;

  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
`;
