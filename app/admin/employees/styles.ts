import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 30px 40px;
  background-color: ${({ theme }) => theme.colors.background.surface};
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  overflow: hidden;
  height: 799px;
  display: flex;
  flex-direction: column;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 26px 24px 23px 24px;
  gap: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const ButtonWrapper = styled.div`
  width: 220px;
  margin-left: auto;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;
