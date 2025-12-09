import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  overflow: hidden;
  height: 799px;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 26px 24px 23px 24px;
  gap: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const SearchWrapper = styled.div`
  flex: 1;
  max-width: 584px;
`;

export const ButtonWrapper = styled.div`
  width: 220px;
  margin-left: auto;
`;

export const TableWrapper = styled.div`
  padding: 20px 24px 0 24px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableHeaderRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const TableHeader = styled.div<{ $flex?: number; $width?: string }>`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  ${({ $width }) => ($width ? `width: ${$width};` : "")}
  ${({ $flex }) => ($flex ? `flex: ${$flex};` : "")}
`;

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.primary};
  }
`;

export const TableCell = styled.div<{ $flex?: number; $width?: string }>`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 8px;
  gap: 12px;
  ${({ $width }) => ($width ? `width: ${$width};` : "")}
  ${({ $flex }) => ($flex ? `flex: ${$flex};` : "")}
`;

export const TableCellCentered = styled(TableCell)`
  justify-content: center;
`;

export const EmployeeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 500px;
  object-fit: cover;
`;
