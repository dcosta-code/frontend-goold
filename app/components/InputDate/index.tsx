"use client";

import { CalendarIcon } from "@/app/icons/CalendarIcon";
import { Container, IconWrapper, StyledInput, Placeholder } from "./styles";

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  min?: string;
  max?: string;
}

export function InputDate({
  value,
  onChange,
  placeholder = "Selecione",
  disabled = false,
  name,
  id,
  min,
  max,
}: Props) {
  const hasValue = Boolean(value);

  return (
    <Container>
      <Placeholder $visible={!hasValue}>{placeholder}</Placeholder>
      <StyledInput
        type="date"
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={id}
        min={min}
        max={max}
        $hasValue={hasValue}
      />
      <IconWrapper>
        <CalendarIcon />
      </IconWrapper>
    </Container>
  );
}
