"use client";

import { Text } from "../Text";
import {
  Container,
  AvatarWrapper,
  Avatar,
  RankBadge,
  InfoContainer,
  NameWrapper,
  StatsWrapper,
  ReviewWrapper,
} from "./styles";

interface Props {
  rank: string;
  name: string;
  avatarUrl: string;
  satisfiedClients: string;
  rating: string;
  reviewsCount: string;
}

export function RepresentativeCard({
  rank,
  name,
  avatarUrl,
  satisfiedClients,
  rating,
  reviewsCount,
}: Props) {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar src={avatarUrl} alt={name} />
        <RankBadge>
          <Text size="xs" weight="medium" color="inverse" lineHeight="1.5">
            {rank}
          </Text>
        </RankBadge>
      </AvatarWrapper>
      <InfoContainer>
        <NameWrapper>
          <Text size="md" weight="medium">
            {name}
          </Text>
        </NameWrapper>
        <StatsWrapper>
          <Text size="sm" weight="bold">
            {satisfiedClients}
          </Text>
          <Text size="sm" weight="regular">
            Clientes Satisfeito
          </Text>
        </StatsWrapper>
        <ReviewWrapper>
          <Text size="sm" weight="bold" color="primary">
            {rating}
          </Text>
          <Text size="sm" weight="medium" color="primary">
            ({reviewsCount} avaliações)
          </Text>
        </ReviewWrapper>
      </InfoContainer>
    </Container>
  );
}
