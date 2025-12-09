"use client";

import { useTheme } from "styled-components";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function CloseIcon({ width = 24, height = 24, color }: Props) {
  const theme = useTheme();
  const fillColor = color || theme.colors.text.primary;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.48406 6.41739L12.4871 1.36978C12.7976 1.05642 12.7976 0.548359 12.4871 0.235022C12.1765 -0.0783406 11.673 -0.0783406 11.3624 0.235022L6.35997 5.28316L1.35752 0.235022C1.04696 -0.0783406 0.543453 -0.0783406 0.232919 0.235022C-0.0776148 0.548384 -0.0776396 1.05644 0.232919 1.36978L5.23589 6.41739L0.232919 11.465C-0.0776396 11.7784 -0.0776396 12.2865 0.232919 12.5998C0.543478 12.9131 1.04699 12.9132 1.35752 12.5998L6.35997 7.55163L11.3624 12.5998C11.673 12.9132 12.1765 12.9132 12.487 12.5998C12.7976 12.2864 12.7976 11.7784 12.487 11.465L7.48406 6.41739Z"
        fill={fillColor}
      />
    </svg>
  );
}
