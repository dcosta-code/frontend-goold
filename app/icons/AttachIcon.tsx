"use client";

import { useTheme } from "styled-components";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function AttachIcon({ width = 15, height = 15, color }: Props) {
  const theme = useTheme();
  const strokeColor = color || theme.colors.text.primary;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 2.5V10.625C8.75 13.0375 6.7875 15 4.375 15C1.9625 15 0 13.0375 0 10.625V3.125C0 1.4 1.4 0 3.125 0C4.85 0 6.25 1.4 6.25 3.125V10.625C6.25 11.6562 5.40625 12.5 4.375 12.5C3.34375 12.5 2.5 11.6562 2.5 10.625V3.75C2.5 3.40625 2.78125 3.125 3.125 3.125C3.46875 3.125 3.75 3.40625 3.75 3.75V10.625C3.75 10.9688 4.03125 11.25 4.375 11.25C4.71875 11.25 5 10.9688 5 10.625V3.125C5 2.09375 4.15625 1.25 3.125 1.25C2.09375 1.25 1.25 2.09375 1.25 3.125V10.625C1.25 12.35 2.65 13.75 4.375 13.75C6.1 13.75 7.5 12.35 7.5 10.625V2.5C7.5 2.15625 7.78125 1.875 8.125 1.875C8.46875 1.875 8.75 2.15625 8.75 2.5Z"
        fill={strokeColor}
      />
    </svg>
  );
}
