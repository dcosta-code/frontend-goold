"use client";

import { Text } from "../Text";
import {
  Container,
  InputWrapper,
  StyledInput,
  ColorPreview,
} from "./styles";

interface Props {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  name?: string;
  id?: string;
}

export function ColorInput({
  label,
  value = "",
  onChange,
  placeholder = "000000",
  name,
  id,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9A-Fa-f]/g, "").slice(0, 6);
    onChange?.(newValue);
  };

  const previewColor = value ? `#${value}` : "#000000";

  return (
    <Container>
      {label && <Text size="md" weight="medium">{label}</Text>}
      <InputWrapper>
        <StyledInput
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          id={id}
          maxLength={6}
        />
        <ColorPreview $color={previewColor} />
      </InputWrapper>
    </Container>
  );
}
