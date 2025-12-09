"use client";

import { useTheme } from "styled-components";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function ChevronRightIcon({ width = 8, height = 8, color }: Props) {
  const theme = useTheme();
  const strokeColor = color || theme.colors.text.primary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M1 1L7 7L1 13"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
