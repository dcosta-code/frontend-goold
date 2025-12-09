"use client";

import { Text } from "@/app/components/Text";
import { Container, Illustration, TextContent } from "./styles";

interface Props {
  imageSrc: string;
  title: string;
  description: string;
}

export function ChatEmptyState({ imageSrc, title, description }: Props) {
  return (
    <Container>
      <Illustration src={imageSrc} alt="" />
      <TextContent>
        <Text size="2xl" weight="semibold" lineHeight="normal">
          {title}
        </Text>
        <Text size="md" weight="medium" lineHeight="23px">
          {description}
        </Text>
      </TextContent>
    </Container>
  );
}
