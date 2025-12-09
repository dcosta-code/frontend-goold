import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const OptionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const OptionLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.41px;
  line-height: 22px;
`;

interface IndicatorProps {
  $active: boolean;
}

export const Indicator = styled.div<IndicatorProps>`
  width: 100%;
  height: 3px;
  margin-top: 4px;
  border-radius: 2px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.interactive.primary : "transparent"};
`;
