import styled, { DefaultTheme } from "styled-components";

export const getModalStyles = (theme: DefaultTheme) => ({
  overlay: {
    backgroundColor: theme.colors.background.overlay,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: "relative" as const,
    inset: "auto",
    width: "438px",
    padding: 0,
    border: `1px solid ${theme.colors.border.default}`,
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: theme.colors.background.surface,
  },
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.surface};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 20px;
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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.default};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 24px 20px;
  gap: 24px;
`;

export const Message = styled.p`
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const UserName = styled.span`
  font-weight: 600;
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.interactive.primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.interactive.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.interactive.disabled};
    cursor: not-allowed;
  }
`;
