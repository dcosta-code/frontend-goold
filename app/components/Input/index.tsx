"use client";

import { useState } from "react";
import { Text } from "../Text";
import { EyeSlash } from "@/app/icons/EyeSlash";
import { EyeOpen } from "@/app/icons/EyeOpen";
import {
  InputContainer,
  InputWrapper,
  StyledInput,
  LabelContainer,
  EyeButton,
} from "./styles";

interface Props {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  disabled?: boolean;
  name?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  name,
  id,
  title,
  subtitle,
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType = isPassword && isPasswordVisible ? "text" : type;

  return (
    <InputContainer>
      {title && (
        <LabelContainer>
          <Text size="md" weight="medium">
            {title}{" "}
          </Text>
          {subtitle && (
            <Text size="sm" weight="regular">
              ({subtitle})
            </Text>
          )}
        </LabelContainer>
      )}
      <InputWrapper>
        <StyledInput
          type={inputType}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          id={id}
          $hasIcon={isPassword}
          $isPassword={isPassword && !isPasswordVisible}
        />
        {isPassword && (
          <EyeButton
            type="button"
            onClick={togglePasswordVisibility}
            aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
          >
            {isPasswordVisible ? <EyeOpen /> : <EyeSlash />}
          </EyeButton>
        )}
      </InputWrapper>
    </InputContainer>
  );
}
