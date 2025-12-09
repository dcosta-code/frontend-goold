"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { Text } from "../Text";
import { EyeSlash } from "@/app/icons/EyeSlash";
import { EyeOpen } from "@/app/icons/EyeOpen";
import {
  Container,
  LabelContainer,
  LabelGroup,
  ToggleButton,
  PinContainer,
  PinBox,
} from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  title?: string;
  subtitle?: string;
  disabled?: boolean;
  isPassword?: boolean;
  size?: "default" | "large";
}

export function PinInput({
  value,
  onChange,
  length = 6,
  title,
  subtitle,
  disabled = false,
  isPassword = true,
  size = "default",
}: Props) {
  const [isVisible, setIsVisible] = useState(!isPassword);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const focusInput = useCallback((index: number) => {
    if (index >= 0 && index < inputRefs.current.length) {
      inputRefs.current[index]?.focus();
    }
  }, []);

  const handleChange = useCallback(
    (index: number, inputValue: string) => {
      const digit = inputValue.replace(/\D/g, "").slice(-1);

      const newValue = value.split("");
      newValue[index] = digit;

      const result = newValue.join("").slice(0, length);
      onChange(result);

      if (digit && index < length - 1) {
        focusInput(index + 1);
      }
    },
    [value, length, onChange, focusInput]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        if (!value[index] && index > 0) {
          focusInput(index - 1);
        } else {
          const newValue = value.split("");
          newValue[index] = "";
          onChange(newValue.join(""));
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        focusInput(index - 1);
      } else if (e.key === "ArrowRight" && index < length - 1) {
        focusInput(index + 1);
      }
    },
    [value, length, onChange, focusInput]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");
      const newValue = pastedData.slice(0, length);
      onChange(newValue);

      const nextIndex = Math.min(newValue.length, length - 1);
      focusInput(nextIndex);
    },
    [length, onChange, focusInput]
  );

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Container>
      {title && (
        <LabelContainer>
          <LabelGroup>
            <Text size="md" weight="medium">
              {title}
            </Text>
            {subtitle && (
              <Text size="sm" weight="regular">
                ({subtitle})
              </Text>
            )}
          </LabelGroup>
          {isPassword && (
            <ToggleButton
              type="button"
              onClick={toggleVisibility}
              aria-label={isVisible ? "Ocultar senha" : "Mostrar senha"}
            >
              {isVisible ? <EyeOpen /> : <EyeSlash />}
            </ToggleButton>
          )}
        </LabelContainer>
      )}
      <PinContainer $size={size}>
        {Array.from({ length }).map((_, index) => (
          <PinBox
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type={isVisible ? "text" : "password"}
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            $hasValue={!!value[index]}
            $size={size}
            autoComplete="off"
          />
        ))}
      </PinContainer>
    </Container>
  );
}
