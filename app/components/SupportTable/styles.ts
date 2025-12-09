import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.surface};
  border-radius: 8px;
  overflow: hidden;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const HeaderCell = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const DateHeaderCell = styled(HeaderCell)`
  flex: 0 0 8%;
  min-width: 80px;
  cursor: pointer;
  gap: 4px;
  user-select: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const AttendantHeaderCell = styled(HeaderCell)`
  flex: 1 1 15%;
  min-width: 140px;
`;

export const TagsHeaderCell = styled(HeaderCell)`
  flex: 1 1 12%;
  min-width: 120px;
`;

export const LastMessageHeaderCell = styled(HeaderCell)`
  flex: 1.5 1 20%;
  min-width: 180px;
`;

export const NameHeaderCell = styled(HeaderCell)`
  flex: 1.5 1 25%;
  min-width: 180px;
`;

export const StatusHeaderCell = styled(HeaderCell)`
  flex: 1 1 15%;
  min-width: 140px;
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
