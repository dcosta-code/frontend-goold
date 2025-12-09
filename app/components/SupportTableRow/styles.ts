import styled from "styled-components";

type RowStatus = "waiting" | "inProgress" | "satisfied";

interface RowProps {
  $rowColor: RowStatus;
}

const getRowBackground = (
  status: RowStatus,
  theme: {
    colors: {
      table: {
        row: { waiting: string; inProgress: string; satisfied: string };
      };
    };
  }
) => {
  const colorMap: Record<RowStatus, string> = {
    waiting: theme.colors.table.row.waiting,
    inProgress: theme.colors.table.row.inProgress,
    satisfied: theme.colors.table.row.satisfied,
  };
  return colorMap[status];
};

interface ClickableRowProps extends RowProps {
  $clickable?: boolean;
}

export const Row = styled.div<ClickableRowProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${({ $rowColor, theme }) => getRowBackground($rowColor, theme)};
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: ${({ $clickable }) => ($clickable ? 0.8 : 1)};
  }
`;

export const Cell = styled.div<RowProps>`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ $rowColor, theme }) => getRowBackground($rowColor, theme)};
`;

export const DateCell = styled(Cell)`
  flex: 0 0 8%;
  min-width: 80px;
`;

export const AttendantCell = styled(Cell)`
  flex: 1 1 15%;
  min-width: 140px;
`;

export const TagsCell = styled(Cell)`
  flex: 1 1 12%;
  min-width: 120px;
`;

export const LastMessageCell = styled(Cell)`
  flex: 1.5 1 20%;
  min-width: 180px;
  gap: 8px;
`;

export const NameCell = styled(Cell)`
  flex: 1.5 1 25%;
  min-width: 180px;
  gap: 12px;
`;

export const StatusCell = styled(Cell)`
  flex: 1 1 15%;
  min-width: 140px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarPlaceholder = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.border.default};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MessageText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
`;
