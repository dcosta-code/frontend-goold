"use client";

import { StyledText, TextSize, TextWeight, TextColor } from "./styles";

type TextElement =
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "label";

interface Props {
  children: React.ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  lineHeight?: string;
  as?: TextElement;
  className?: string;
}

export function Text({
  children,
  size = "md",
  weight = "regular",
  color = "primary",
  lineHeight,
  as = "span",
  className,
}: Props) {
  return (
    <StyledText
      as={as}
      $size={size}
      $weight={weight}
      $color={color}
      $lineHeight={lineHeight}
      className={className}
    >
      {children}
    </StyledText>
  );
}
