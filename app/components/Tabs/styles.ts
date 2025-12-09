import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface TabButtonProps {
  $isActive: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const TabIndicator = styled.div<TabButtonProps>`
  width: 100%;
  height: 3px;
  margin-top: 4px;
  border-radius: 2px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.text.primary : "transparent"};
`;
