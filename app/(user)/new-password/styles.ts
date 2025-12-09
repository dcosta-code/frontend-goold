import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.surface};
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding: 20px;
  padding-top: 60px;
  gap: 20px;
`;

export const LockImage = styled.img`
  width: 91px;
  height: 180px;
  object-fit: contain;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  font-size: 22px;
  line-height: normal;
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

export const PasswordSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
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
