import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 230px;
  height: 44px;
  padding: 7px 10px 7px 7px;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.focus};
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 60px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-width: 0;
  text-align: left;

  & > span:first-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
