import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 30px 40px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  min-width: 0;
  overflow: hidden;
`;

export const TabsWrapper = styled.div`
  margin-bottom: 24px;
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;
