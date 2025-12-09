import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  overflow: hidden;
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  flex-wrap: wrap;
`;

export const SearchWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 459px;
`;

export const DateWrapper = styled.div`
  width: 186px;
`;

export const SelectWrapper = styled.div`
  width: 186px;
`;

export const IconButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.interactive.disabled};
  }
`;

export const Divider = styled.div`
  height: 1px;
  margin: 0 24px;
  background: ${({ theme }) => theme.colors.border.default};
`;

export const TableContent = styled.div`
  padding: 17px 24px 24px;
`;
