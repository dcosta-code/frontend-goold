"use client";

import { Text } from "../Text";
import { Container, ColorDot, StatusColor } from "./styles";

interface Props {
  color: StatusColor;
  title: string;
}

export function StatusLegend({ color, title }: Props) {
  return (
    <Container>
      <ColorDot $color={color} />
      <Text size="sm" weight="medium" lineHeight="18px">
        {title}
      </Text>
    </Container>
  );
}
