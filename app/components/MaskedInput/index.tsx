"use client";

import { useCallback } from "react";
import { Text } from "../Text";
import {
  InputContainer,
  InputWrapper,
  StyledInput,
  LabelContainer,
  IconWrapper,
} from "./styles";

type MaskType = "cpf" | "phone";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  mask: MaskType;
  icon?: React.ReactNode;
}

const masks: Record<MaskType, { pattern: string; maxLength: number }> = {
  cpf: { pattern: "000.000.000-00", maxLength: 14 },
  phone: { pattern: "(00) 00000-0000", maxLength: 15 },
};

function applyMask(value: string, maskType: MaskType): string {
  const digits = value.replace(/\D/g, "");

  switch (maskType) {
    case "cpf": {
      let result = "";
      for (let i = 0; i < digits.length && i < 11; i++) {
        if (i === 3 || i === 6) result += ".";
        if (i === 9) result += "-";
        result += digits[i];
      }
      return result;
    }
    case "phone": {
      let result = "";
      for (let i = 0; i < digits.length && i < 11; i++) {
        if (i === 0) result += "(";
        if (i === 2) result += ") ";
        if (i === 7) result += "-";
        result += digits[i];
      }
      return result;
    }
    default:
      return digits;
  }
}

function getUnmaskedValue(value: string): string {
  return value.replace(/\D/g, "");
}

export function MaskedInput({
  value,
  onChange,
  placeholder,
  disabled = false,
  name,
  id,
  title,
  subtitle,
  mask,
  icon,
}: Props) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const unmasked = getUnmaskedValue(rawValue);
      const masked = applyMask(unmasked, mask);
      onChange(masked);
    },
    [mask, onChange]
  );

  return (
    <InputContainer>
      {title && (
        <LabelContainer>
          <Text size="md" weight="medium">
            {title}
          </Text>
          {subtitle && (
            <Text size="sm" weight="regular">
              ({subtitle})
            </Text>
          )}
        </LabelContainer>
      )}
      <InputWrapper $disabled={disabled}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <StyledInput
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          id={id}
          maxLength={masks[mask].maxLength}
        />
      </InputWrapper>
    </InputContainer>
  );
}

export { getUnmaskedValue };
