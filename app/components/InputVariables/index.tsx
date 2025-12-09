"use client";

import { Text } from "../Text";
import { CopyIcon } from "@/app/icons/CopyIcon";
import {
  Container,
  InputWrapper,
  Badge,
  IconWrapper,
} from "./styles";

interface Props {
  title?: string;
  variables: string[];
}

export function InputVariables({ title, variables }: Props) {
  const handleCopy = async (variable: string) => {
    try {
      await navigator.clipboard.writeText(variable);
    } catch (error) {}
  };

  return (
    <Container>
      {title && (
        <Text size="md" weight="medium">
          {title}
        </Text>
      )}
      <InputWrapper>
        {variables.map((variable, index) => (
          <Badge
            key={`${variable}-${index}`}
            type="button"
            onClick={() => handleCopy(variable)}
            aria-label={`Copiar ${variable}`}
          >
            <Text size="xs" color="inverse">{variable}</Text>
            <IconWrapper>
              <CopyIcon />
            </IconWrapper>
          </Badge>
        ))}
      </InputWrapper>
    </Container>
  );
}
