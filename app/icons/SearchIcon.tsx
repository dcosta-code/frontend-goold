"use client";

import { useTheme } from "styled-components";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export function SearchIcon({
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
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_1_911)">
        <path
          d="M9.17188 1.66406C13.3119 1.66406 16.6719 5.02406 16.6719 9.16406C16.6719 13.3041 13.3119 16.6641 9.17188 16.6641C5.03188 16.6641 1.67188 13.3041 1.67188 9.16406C1.67188 5.02406 5.03188 1.66406 9.17188 1.66406ZM9.17188 14.9974C12.3944 14.9974 15.0052 12.3866 15.0052 9.16406C15.0052 5.94073 12.3944 3.33073 9.17188 3.33073C5.94854 3.33073 3.33854 5.94073 3.33854 9.16406C3.33854 12.3866 5.94854 14.9974 9.17188 14.9974ZM16.2427 15.0566L18.6002 17.4132L17.421 18.5924L15.0644 16.2349L16.2427 15.0566Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_911">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
