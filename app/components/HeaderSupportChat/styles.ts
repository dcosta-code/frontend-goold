import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  height: 32px;
  padding: 0 10px 0 7px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 100px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.interactive.primary};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.interactive.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.interactive.disabled};
    cursor: not-allowed;
  }
`;

export const PaginationCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.background.pagination};
  border: 1px solid ${({ theme }) => theme.colors.interactive.primary};
  border-radius: 100px;
`;
