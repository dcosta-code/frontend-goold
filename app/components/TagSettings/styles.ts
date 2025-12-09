import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 687px;
  max-height: 600px;
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
  gap: 20px;
  padding: 26px 30px 30px;
  overflow-y: auto;
  flex: 1;
`;

export const TagRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;

export const NameInputWrapper = styled.div`
  width: 303px;
  flex-shrink: 0;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;
