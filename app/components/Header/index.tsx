"use client";

import { Text } from "@/app/components/Text";
import { Container, TitleGroup } from "./styles";

interface Props {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export function Header({ title, subtitle, children }: Props) {
  return (
    <Container>
      <TitleGroup>
        <Text as="h1" size="3xl" weight="semibold">
          {title}
        </Text>
        <Text as="p" size="md" weight="medium">
          {subtitle}
        </Text>
      </TitleGroup>
      {children}
    </Container>
  );
}
