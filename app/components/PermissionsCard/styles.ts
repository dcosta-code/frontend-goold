import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 30px;
`;

export const Title = styled.div`
  width: 100%;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Label = styled.div`
  flex: 1;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.default};
`;
