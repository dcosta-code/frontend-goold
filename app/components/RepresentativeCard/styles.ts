import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const RankBadge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.interactive.primary};
  border: 0.5px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20px;
`;

export const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
