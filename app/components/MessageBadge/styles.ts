import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.interactive.primary};
  border-radius: 60px;
`;

export const NotificationBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 14px;
  height: 14px;
  padding: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.interactive.primary};
  border: 0.5px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 50px;
`;

export const PlusSign = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.badge};
  line-height: 1;
`;

export const NumberText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.badge};
  line-height: 1;
`;
