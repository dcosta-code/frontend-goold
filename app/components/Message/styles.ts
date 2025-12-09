import styled from "styled-components";

interface PositionProps {
  $position: "left" | "right";
}

export const Container = styled.div<PositionProps>`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  flex-direction: ${({ $position }) =>
    $position === "left" ? "row" : "row-reverse"};
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 0;
`;

export const MetadataRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
