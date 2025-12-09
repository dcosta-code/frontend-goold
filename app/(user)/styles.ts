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
  width: 180px;
  height: 180px;
  object-fit: contain;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  max-width: 400px;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

export const LinkText = styled.button`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
`;
