"use client";

import { Container, Knob } from "./styles";

interface Props {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  id?: string;
}

export function Toggle({
  checked = false,
  onChange,
  disabled = false,
  name,
  id,
}: Props) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <Container
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={handleClick}
      disabled={disabled}
      $checked={checked}
      name={name}
      id={id}
    >
      <Knob $checked={checked} />
    </Container>
  );
}
