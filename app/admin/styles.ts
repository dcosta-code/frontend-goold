import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const FormCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 5px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;
`;

export const ErrorMessage = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.error};
`;
