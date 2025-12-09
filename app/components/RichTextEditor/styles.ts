import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  .jodit-container {
    border: 1px solid ${({ theme }) => theme.colors.border.default} !important;
    border-radius: 10px !important;
  }

  .jodit-toolbar__box {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.default} !important;
  }
`;
