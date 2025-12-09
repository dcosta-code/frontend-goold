"use client";

import { useTheme } from "styled-components";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function RefreshIcon({
  width = 20,
  height = 20,
  color,
}: Props) {
  const theme = useTheme();
  const fillColor = color || theme.colors.text.primary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M12.7875 2.20312C11.4281 0.84375 9.5625 0 7.49063 0C3.34688 0 0 3.35625 0 7.5C0 11.6438 3.34688 15 7.49063 15C10.9875 15 13.9031 12.6094 14.7375 9.375H12.7875C12.0188 11.5594 9.9375 13.125 7.49063 13.125C4.3875 13.125 1.86563 10.6031 1.86563 7.5C1.86563 4.39687 4.3875 1.875 7.49063 1.875C9.04688 1.875 10.4344 2.52188 11.4469 3.54375L8.42813 6.5625H14.9906V0L12.7875 2.20312Z"
        fill={fillColor}
      />
    </svg>
  );
}
