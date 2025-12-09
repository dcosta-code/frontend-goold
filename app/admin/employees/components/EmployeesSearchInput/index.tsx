"use client";

import { useState, useEffect, useRef, memo } from "react";
import { SearchBar } from "../../../../components/SearchBar";
import { Container } from "./styles";

interface Props {
  onDebouncedSearch: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export const EmployeesSearchInput = memo(function EmployeesSearchInput({
  onDebouncedSearch,
  placeholder = "Filtre por nome, e-mail ou tipo de funcionário",
  debounceMs = 300,
}: Props) {
  const [localValue, setLocalValue] = useState("");
  const onDebouncedSearchRef = useRef(onDebouncedSearch);

  useEffect(() => {
    onDebouncedSearchRef.current = onDebouncedSearch;
  }, [onDebouncedSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onDebouncedSearchRef.current(localValue);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [localValue, debounceMs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  return (
    <Container>
      <SearchBar
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Container>
  );
});
