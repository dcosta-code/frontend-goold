import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 687px;
  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 12px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  padding: 0 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  flex-shrink: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 26px 35px 30px;
`;

export const VariablesWrapper = styled.div`
  width: 100%;
`;

export const EditorWrapper = styled.div`
  width: 100%;
`;
