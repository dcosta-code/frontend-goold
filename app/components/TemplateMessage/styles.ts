import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 687px;
  max-height: 800px;
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

export const SearchWrapper = styled.div`
  padding: 20px 30px 0;
  flex-shrink: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 26px 30px 30px;
  overflow-y: auto;
  flex: 1;
`;

export const TemplateItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  width: 275px;
  flex-shrink: 0;
`;

export const VariablesWrapper = styled.div`
  width: 275px;
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

export const EditorWrapper = styled.div`
  width: 616px;
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
