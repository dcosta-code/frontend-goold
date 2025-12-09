"use client";

import { ArrowLeftIcon } from "@/app/icons/ArrowLeftIcon";
import { Text } from "@/app/components/Text";
import { Container, LeftContent, RightContent, BackButton } from "./styles";

interface Props {
  title: string;
  onBack?: () => void;
  rightContent?: React.ReactNode;
}

export function ChatHeader({ title, onBack, rightContent }: Props) {
  return (
    <Container>
      <LeftContent>
        {onBack && (
          <BackButton onClick={onBack} type="button" aria-label="Voltar">
            <ArrowLeftIcon width={19} height={19} />
          </BackButton>
        )}
        <Text size="xl" weight="medium" lineHeight="29px">
          {title}
        </Text>
      </LeftContent>
      {rightContent && <RightContent>{rightContent}</RightContent>}
    </Container>
  );
}
