import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 30px 0;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  width: 687px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
`;

interface FeedbackMessageProps {
  $type: "success" | "error";
}

export const FeedbackMessage = styled.div<FeedbackMessageProps>`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme, $type }) =>
    $type === "success"
      ? theme.colors.status.satisfied.background
      : theme.colors.interactive.dangerBackground};
  color: ${({ theme, $type }) =>
    $type === "success"
      ? theme.colors.status.satisfied.text
      : theme.colors.interactive.danger};
  width: 100%;
`;
