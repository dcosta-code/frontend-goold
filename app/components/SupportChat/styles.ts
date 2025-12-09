import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 80px;
  padding: 0 31px;
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.colors.shadow.light};
  position: relative;
  z-index: 2;
`;

export const SearchBarWrapper = styled.div`
  width: 459px;
`;

export const InputDateWrapper = styled.div`
  width: 186px;
`;

export const MessagesArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 31px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const EditorArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 224px;
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.colors.shadow.dark};
  position: relative;
  z-index: 2;
`;

export const EditorWrapper = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 60px;
  padding: 0 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ theme }) => theme.colors.background.surface};
`;

export const AttachButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.interactive.primary};
  border-radius: 7px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const TemplateSelectWrapper = styled.div`
  flex: 1;
`;

export const TemplateSelect = styled.select`
  height: 32px;
  padding: 5px 33px 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background.surface};
  width: 198px;
  cursor: pointer;
  font-size: 12px;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text.secondary};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border.focus};
  }

  option {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const SendButtonWrapper = styled.div`
  width: 160px;
`;
