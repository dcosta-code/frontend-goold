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
  justify-content: flex-start;
  flex: 1;
  padding: 20px;
  padding-top: 40px;
  gap: 20px;
`;

export const EmailImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 390px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const EmailHighlight = styled.span`
  font-weight: 700;
`;

export const PinWrapper = styled.div`
  width: 100%;
  max-width: 390px;
`;

export const TipText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  max-width: 390px;
`;

export const TipLabel = styled.span`
  font-weight: 700;
`;

export const SupportSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const SupportText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const SupportLink = styled.button`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.text.primary};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const BottomSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ResendLink = styled.button`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.text.primary};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;
