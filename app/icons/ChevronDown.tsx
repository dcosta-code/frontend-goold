"use client";

import { useTheme } from "styled-components";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function ChevronDown({ width = 11, height = 7, color }: Props) {
  const theme = useTheme();
  const strokeColor = color || theme.colors.text.primary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11 7"
      fill="none"
    >
      <path
        d="M1 1L5.5 5.5L10 1"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
