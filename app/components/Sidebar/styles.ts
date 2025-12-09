import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 260px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding-left: 23px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 16px;
`;

interface MenuItemContainerProps {
  $isActive: boolean;
}

export const MenuItemContainer = styled.button<MenuItemContainerProps>`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: ${({ $isActive }) => ($isActive ? "10px" : "5px")};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.interactive.primary : "transparent"};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ $isActive, theme }) =>
      $isActive
        ? theme.colors.interactive.primaryHover
        : theme.colors.border.default};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;
