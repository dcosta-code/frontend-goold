"use client";

import { useTheme } from "styled-components";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function Hamburguer({
  width = 24,
  height = 24,
  color,
}: Props) {
  const theme = useTheme();
  const fillColor = color || theme.colors.text.primary;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9583 11.4609H1.04167C0.46637 11.4609 0 11.9273 0 12.5026C0 13.0779 0.46637 13.5443 1.04167 13.5443H23.9583C24.5336 13.5443 25 13.0779 25 12.5026C25 11.9273 24.5336 11.4609 23.9583 11.4609Z"
        fill={fillColor}
      />
      <path
        d="M23.9583 4.16406H1.04167C0.46637 4.16406 0 4.63043 0 5.20573C0 5.78103 0.46637 6.2474 1.04167 6.2474H23.9583C24.5336 6.2474 25 5.78103 25 5.20573C25 4.63043 24.5336 4.16406 23.9583 4.16406Z"
        fill={fillColor}
      />
      <path
        d="M23.9583 18.75H1.04167C0.46637 18.75 0 19.2164 0 19.7917C0 20.367 0.46637 20.8333 1.04167 20.8333H23.9583C24.5336 20.8333 25 20.367 25 19.7917C25 19.2164 24.5336 18.75 23.9583 18.75Z"
        fill={fillColor}
      />
    </svg>
  );
}
