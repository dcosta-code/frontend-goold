"use client";

import { ReactNode } from "react";
import { SearchBar } from "@/app/components/SearchBar";
import { InputDate } from "@/app/components/InputDate";
import { InputSelect } from "@/app/components/InputSelect";
import { ShuffleIcon } from "@/app/icons/ShuffleIcon";
import { RefreshIcon } from "@/app/icons/RefreshIcon";
import {
  Container,
  FilterRow,
  SearchWrapper,
  DateWrapper,
  SelectWrapper,
  IconButtonsWrapper,
  IconButton,
  Divider,
  TableContent,
} from "./styles";

interface Option {
  value: string;
  label: string;
}

interface Props {
  searchValue?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dateValue?: string;
  onDateChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  attendantValue?: string;
  onAttendantChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  attendantOptions: Option[];
  onShuffle?: () => void;
  onRefresh?: () => void;
  children: ReactNode;
}

export function TableFilterBar({
  searchValue,
  onSearchChange,
  dateValue,
  onDateChange,
  attendantValue,
  onAttendantChange,
  attendantOptions,
  onShuffle,
  onRefresh,
  children,
}: Props) {
  return (
    <Container>
      <FilterRow>
        <SearchWrapper>
          <SearchBar value={searchValue} onChange={onSearchChange} />
        </SearchWrapper>
        <DateWrapper>
          <InputDate value={dateValue} onChange={onDateChange} />
        </DateWrapper>
        <SelectWrapper>
          <InputSelect
            value={attendantValue}
            onChange={onAttendantChange}
            options={attendantOptions}
            placeholder="Todas atendentes"
          />
        </SelectWrapper>
        <IconButtonsWrapper>
          <IconButton onClick={onShuffle} type="button" aria-label="Shuffle">
            <ShuffleIcon width={20} height={20} />
          </IconButton>
          <IconButton onClick={onRefresh} type="button" aria-label="Refresh">
            <RefreshIcon width={20} height={20} />
          </IconButton>
        </IconButtonsWrapper>
      </FilterRow>
      <Divider />
      <TableContent>{children}</TableContent>
    </Container>
  );
}
