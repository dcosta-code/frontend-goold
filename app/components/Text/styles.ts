import styled, { DefaultTheme } from "styled-components";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "1xl" | "2xl" | "3xl";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextColor = "primary" | "secondary" | "tertiary" | "inverse" | "error";

interface StyledTextProps {
  $size: TextSize;
  $weight: TextWeight;
  $color: TextColor;
  $lineHeight?: string;
}

const sizeStyles: Record<TextSize, string> = {
  xs: "10px",
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "18px",
  "1xl": "22px",
  "2xl": "24px",
  "3xl": "28px",
};

const weightStyles: Record<TextWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const getColor = (color: TextColor, theme: DefaultTheme): string => {
  const colorMap: Record<TextColor, string> = {
    primary: theme.colors.text.primary,
    secondary: theme.colors.text.secondary,
    tertiary: theme.colors.text.tertiary,
    inverse: theme.colors.text.inverse,
    error: theme.colors.text.error,
  };
  return colorMap[color];
};

const lineHeightMap: Record<TextSize, string> = {
  xs: "14px",
  sm: "16px",
  md: "17px",
  lg: "24px",
  xl: "28px",
  "1xl": "normal",
  "2xl": "32px",
  "3xl": "34px",
};

export const StyledText = styled.span<StyledTextProps>`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size }) => sizeStyles[$size]};
  font-weight: ${({ $weight }) => weightStyles[$weight]};
  color: ${({ $color, theme }) => getColor($color, theme)};
  line-height: ${({ $size, $lineHeight }) =>
    $lineHeight || lineHeightMap[$size]};
`;
