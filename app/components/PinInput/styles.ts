import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

export const PinContainer = styled.div<{ $size: "default" | "large" }>`
  display: flex;
  width: 100%;
  gap: ${({ $size }) => ($size === "large" ? "0" : "8px")};
  justify-content: ${({ $size }) => ($size === "large" ? "space-between" : "flex-start")};

  @media (min-width: 400px) {
    gap: ${({ $size }) => ($size === "large" ? "0" : "14px")};
  }
`;

export const PinBox = styled.input<{ $hasValue: boolean; $size: "default" | "large" }>`
  flex: ${({ $size }) => ($size === "large" ? "0 0 65px" : "1")};
  min-width: 0;
  max-width: ${({ $size }) => ($size === "large" ? "65px" : "55px")};
  width: ${({ $size }) => ($size === "large" ? "65px" : "auto")};
  height: ${({ $size }) => ($size === "large" ? "65px" : "auto")};
  aspect-ratio: 1;
  border-radius: 5px;
  border: 1px solid
    ${({ theme, $hasValue }) =>
      $hasValue ? theme.colors.border.focus : theme.colors.border.default};
  background-color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.colors.background.surface : theme.colors.background.primary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: clamp(16px, 4vw, 24px);
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focus};
    background-color: ${({ theme }) => theme.colors.background.surface};
  }

  &::placeholder {
    color: transparent;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
