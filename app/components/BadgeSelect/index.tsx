"use client";

import { ChevronDown } from "@/app/icons/ChevronDown";
import {
  Container,
  Content,
  Label,
  IconWrapper,
  HiddenSelect,
} from "./styles";

interface Option {
  value: string;
  label: string;
}

interface BadgeColors {
  background: string;
  border: string;
  text: string;
}

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  colors?: BadgeColors;
  disabled?: boolean;
  name?: string;
  id?: string;
  maxWidth?: number;
}

const defaultColors: BadgeColors = {
  background: "#FFFFFF",
  border: "#D7D7D7",
  text: "#000000",
};

export function BadgeSelect({
  value,
  onChange,
  options,
  colors = defaultColors,
  disabled = false,
  name,
  id,
  maxWidth,
}: Props) {
  const selectedOption = options.find((opt) => opt.value === value);
  const displayLabel = selectedOption?.label || options[0]?.label || "Selecione";

  return (
    <Container
      $backgroundColor={colors.background}
      $borderColor={colors.border}
    >
      <Content>
        <Label $textColor={colors.text} $maxWidth={maxWidth}>{displayLabel}</Label>
        <IconWrapper $iconColor={colors.text}>
          <ChevronDown width={8} height={5} color={colors.text} />
        </IconWrapper>
      </Content>
      <HiddenSelect
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={id}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </HiddenSelect>
    </Container>
  );
}
