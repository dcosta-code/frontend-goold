"use client";

import { useTheme } from "styled-components";
import { CaretDown } from "@/app/icons/CaretDown";
import { Text } from "@/app/components/Text";
import { Container, Avatar, Info, IconWrapper } from "./styles";

interface Props {
  name: string;
  role: string;
  imageUrl: string;
  onClick?: () => void;
}

export function MenuProfile({ name, role, imageUrl, onClick }: Props) {
  const theme = useTheme();

  return (
    <Container onClick={onClick} type="button">
      <Avatar src={imageUrl} alt={name} />
      <Info>
        <Text size="sm" weight="medium">
          {name}
        </Text>
        <Text size="xs" weight="regular">
          {role}
        </Text>
      </Info>
      <IconWrapper>
        <CaretDown width={17} height={19} color={theme.colors.text.primary} />
      </IconWrapper>
    </Container>
  );
}
