import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const Illustration = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  max-width: 400px;
`;
