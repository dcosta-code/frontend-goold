import styled, { DefaultTheme } from "styled-components";

export const getModalStyles = (theme: DefaultTheme) => ({
  overlay: {
    backgroundColor: theme.colors.background.overlay,
    zIndex: 1000,
  },
  content: {
    top: 0,
    right: 0,
    bottom: 0,
    left: "auto",
    width: "440px",
    padding: 0,
    border: "none",
    borderRadius: 0,
    overflow: "hidden",
  },
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.surface};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px 8px 20px;
`;

export const Tab = styled.div`
  position: relative;
  width: 112px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
`;

export const TabLabel = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  white-space: nowrap;
`;

export const TabIndicator = styled.div`
  position: absolute;
  top: 89%;
  right: 2.68%;
  bottom: 5%;
  left: 3.57%;
  background-color: ${({ theme }) => theme.colors.interactive.primary};
  border-radius: 31px 31px 0 0;
`;

export const TabDivider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.colors.border.default};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.default};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  overflow-y: auto;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ResetButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 15px;
  background-color: ${({ theme }) => theme.colors.interactive.primary};
  border: none;
  border-radius: 100px;
  width: 147px;
  cursor: pointer;
`;

export const PermissionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PermissionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PermissionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Footer = styled.div`
  display: flex;
  gap: 20px;
  padding: 17px 19px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: 0px 0px 30px 10px ${({ theme }) => theme.colors.shadow.medium};
`;

export const FooterButton = styled.div`
  width: 190px;
`;
