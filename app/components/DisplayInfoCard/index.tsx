"use client";

import { Text } from "../Text";
import { Container, Value } from "./styles";

interface Props {
  label: string;
  value: string;
}

export function DisplayInfoCard({ label, value }: Props) {
  return (
    <Container>
      <Text size="md" weight="regular" lineHeight="20px">
        {label}
      </Text>
      <Value>{value}</Value>
    </Container>
  );
}
