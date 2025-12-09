import styled from "styled-components";
import { DefaultTheme } from "styled-components";

export const getModalStyles = (theme: DefaultTheme) => ({
  overlay: {
    backgroundColor: theme.colors.background.overlay,
    zIndex: 1000,
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    border: "none",
    borderRadius: 0,
    backgroundColor: theme.colors.background.surface,
  },
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.surface};
`;

export const HeaderWrapper = styled.div`
  padding: 28px 37px 0 37px;
`;

export const ChatWrapper = styled.div`
  padding: 36px 37px 37px 37px;
  flex: 1;
  overflow: hidden;
`;
