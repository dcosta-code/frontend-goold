"use client";

import { SearchIcon } from "@/app/icons/SearchIcon";
import { Container, IconWrapper, StyledInput } from "./styles";

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Filtre por nome, CPF, atendente, canal, assunto e muito mais...",
  disabled = false,
  name,
  id,
}: Props) {
  return (
    <Container>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        id={id}
      />
    </Container>
  );
}
