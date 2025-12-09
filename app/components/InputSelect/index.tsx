"use client";

import { ChevronDown } from "@/app/icons/ChevronDown";
import { Text } from "../Text";
import { Container, SelectWrapper, IconWrapper, StyledSelect, LabelWrapper } from "./styles";

interface Option {
  value: string;
  label: string;
}

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  title?: string;
}

export function InputSelect({
  value,
  onChange,
  options,
  placeholder = "Selecione",
  disabled = false,
  name,
  id,
  title,
}: Props) {
  return (
    <Container>
      {title && (
        <LabelWrapper>
          <Text size="md" weight="medium">{title}</Text>
        </LabelWrapper>
      )}
      <SelectWrapper>
        <StyledSelect
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={name}
          id={id}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <IconWrapper>
          <ChevronDown />
        </IconWrapper>
      </SelectWrapper>
    </Container>
  );
}
