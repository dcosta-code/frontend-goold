import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.surface};
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
  gap: 20px;
`;

export const SupportImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  font-size: 22px;
  line-height: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  max-width: 400px;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  max-width: 400px;
  margin: 0;

  strong {
    font-weight: 700;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
