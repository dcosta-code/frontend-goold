"use client";

import { Container, OptionButton, OptionLabel, Indicator } from "./styles";

interface Option {
  title: string;
  code: string;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (code: string) => void;
}

export function OptionsBar({ options, value, onChange }: Props) {
  return (
    <Container>
      {options.map((option) => (
        <OptionButton key={option.code} onClick={() => onChange(option.code)}>
          <OptionLabel>{option.title}</OptionLabel>
          <Indicator $active={value === option.code} />
        </OptionButton>
      ))}
    </Container>
  );
}
