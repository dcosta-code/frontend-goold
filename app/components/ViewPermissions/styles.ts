import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ModulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const ModuleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const Label = styled.span`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

interface BadgeProps {
  $active?: boolean;
}

export const ModuleBadge = styled.div<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 15px;
  border-radius: 100px;
  transition: all 0.2s ease;

  ${({ $active = true, theme }) =>
    $active
      ? css`
          background-color: ${theme.colors.interactive.primary};
          border: 1px solid ${theme.colors.interactive.primary};
        `
      : css`
          background-color: ${theme.colors.background.surface};
          border: 1px solid ${theme.colors.border.default};
        `}
`;

export const ModuleBadgeText = styled.span<BadgeProps>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  white-space: nowrap;
  color: ${({ $active = true, theme }) =>
    $active ? theme.colors.text.inverse : theme.colors.text.primary};
`;

export const SubModuleBadge = styled.div<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 15px;
  border-radius: 100px;
  transition: all 0.2s ease;

  ${({ $active = true, theme }) =>
    $active
      ? css`
          background-color: ${theme.colors.background.primary};
          border: 1px solid ${theme.colors.interactive.primary};
        `
      : css`
          background-color: ${theme.colors.background.surface};
          border: 1px solid ${theme.colors.border.default};
        `}
`;

export const SubModuleBadgeText = styled.span<BadgeProps>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  white-space: nowrap;
  color: ${({ $active = true, theme }) =>
    $active ? theme.colors.text.primary : theme.colors.text.secondary};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.default};
`;
