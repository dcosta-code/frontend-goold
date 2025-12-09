"use client";

import { Text } from "@/app/components/Text";
import { StarRating } from "@/app/components/StarRating";
import { CloseIcon } from "@/app/icons/CloseIcon";
import {
  Container,
  Header,
  CloseButton,
  Content,
  Illustration,
  TextContent,
  HighlightText,
  Footer,
  SubmitButton,
  CloseLink,
} from "./styles";

interface Props {
  attendantName: string;
  rating: number;
  onRatingChange: (value: number) => void;
  onSubmit: () => void;
  onClose: () => void;
  isSubmitDisabled: boolean;
}

export function RatingPageView({
  attendantName,
  rating,
  onRatingChange,
  onSubmit,
  onClose,
  isSubmitDisabled,
}: Props) {
  return (
    <Container>
      <Header>
        <CloseButton onClick={onClose} aria-label="Fechar">
          <CloseIcon width={14} height={14} />
        </CloseButton>
      </Header>

      <Content>
        <Illustration src="/images/5-star-rating.png" alt="Avaliação" />

        <TextContent>
          <Text size="1xl" weight="semibold" lineHeight="normal">
            Avalie nosso atendimento :)
          </Text>
          <Text size="md" weight="medium" lineHeight="23px">
            A atendente resolveu seu problema{" "}
            <HighlightText>{attendantName}</HighlightText>? De 0 a 5 qual sua
            nota para o atendimento recebido?
          </Text>
        </TextContent>

        <StarRating value={rating} onChange={onRatingChange} size={50} />
      </Content>

      <Footer>
        <SubmitButton
          $disabled={isSubmitDisabled}
          onClick={onSubmit}
          disabled={isSubmitDisabled}
        >
          <Text size="lg" weight="semibold" color="inverse">
            Enviar avaliação
          </Text>
        </SubmitButton>
        <CloseLink onClick={onClose}>
          <Text size="md" weight="bold">
            Fechar
          </Text>
        </CloseLink>
      </Footer>
    </Container>
  );
}
