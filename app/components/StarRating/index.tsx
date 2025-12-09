"use client";

import { useState } from "react";
import { StarIcon } from "@/app/icons/StarIcon";
import { Container, StarButton } from "./styles";

interface Props {
  value: number;
  onChange: (value: number) => void;
  size?: number;
  disabled?: boolean;
}

export function StarRating({
  value,
  onChange,
  size = 40,
  disabled = false,
}: Props) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleClick = (rating: number) => {
    if (!disabled) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    if (!disabled) {
      setHoverValue(rating);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <Container onMouseLeave={handleMouseLeave}>
      {[1, 2, 3, 4, 5].map((rating) => (
        <StarButton
          key={rating}
          type="button"
          onClick={() => handleClick(rating)}
          onMouseEnter={() => handleMouseEnter(rating)}
          $disabled={disabled}
          aria-label={`${rating} estrela${rating > 1 ? "s" : ""}`}
        >
          <StarIcon
            width={size}
            height={size * 0.95}
            filled={rating <= displayValue}
          />
        </StarButton>
      ))}
    </Container>
  );
}
