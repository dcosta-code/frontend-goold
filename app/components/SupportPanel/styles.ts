import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
  min-width: 0;
  width: 100%;
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 22px;
  width: 100%;
  min-width: 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;

    & > * {
      min-width: calc(50% - 11px);
    }
  }
`;

export const OptionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;

export const LegendRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  flex-wrap: wrap;
`;

