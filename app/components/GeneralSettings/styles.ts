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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 26px 30px 30px;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 18px;
`;

export const InputWrapper = styled.div`
  width: 280px;
  flex-shrink: 0;
`;

export const SelectWrapper = styled.div`
  width: 280px;
  flex-shrink: 0;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  margin-left: auto;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.border.default};
`;
