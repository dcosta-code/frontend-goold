"use client";

import { useTheme } from "styled-components";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function UserAvatarIcon({
  width = 59,
  height = 79,
  color,
}: Props) {
  const theme = useTheme();
  const strokeColor = color || theme.colors.text.primary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 59 79"
      fill="none"
    >
      <path
        d="M29.5 39.5C38.3366 39.5 45.5 32.3366 45.5 23.5C45.5 14.6634 38.3366 7.5 29.5 7.5C20.6634 7.5 13.5 14.6634 13.5 23.5C13.5 32.3366 20.6634 39.5 29.5 39.5Z"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 71.5C3 58.5213 14.8497 48 29.5 48C44.1503 48 56 58.5213 56 71.5"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
