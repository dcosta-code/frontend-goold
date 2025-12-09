import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 45px;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 7px;
  overflow-x: auto;
  overflow-y: hidden;
  box-sizing: border-box;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.border.default};
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbar.thumb};
    border-radius: 50px;
  }
`;

export const Badge = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 10px 3px;
  background-color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: 60px;
  cursor: pointer;
  flex-shrink: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.inverse};
`;
