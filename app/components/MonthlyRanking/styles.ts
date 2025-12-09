import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 25px 15px 20px;
  overflow: hidden;
  min-width: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.default};
`;

export const CardListWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.border.default};
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text.tertiary};
    border-radius: 50px;
  }
`;

export const CardItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 66px;
  background-color: ${({ theme }) => theme.colors.border.default};
`;
