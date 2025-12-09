"use client";

import { Trophy } from "../../icons/Trophy";
import { Text } from "../Text";
import { RepresentativeCard } from "../RepresentativeCard";
import {
  Container,
  Content,
  Header,
  Divider,
  CardListWrapper,
  CardItem,
  VerticalDivider,
} from "./styles";

interface Representative {
  rank: string;
  name: string;
  avatarUrl: string;
  satisfiedClients: string;
  rating: string;
  reviewsCount: string;
}

interface Props {
  representatives: Representative[];
}

export function MonthlyRanking({ representatives }: Props) {
  return (
    <Container>
      <Content>
        <Header>
          <Trophy width={20} height={20} />
          <Text size="xl" weight="medium">
            Ranking do mês
          </Text>
        </Header>
        <Divider />
        <CardListWrapper>
          {representatives.map((rep, index) => (
            <CardItem key={rep.rank}>
              <RepresentativeCard
                rank={rep.rank}
                name={rep.name}
                avatarUrl={rep.avatarUrl}
                satisfiedClients={rep.satisfiedClients}
                rating={rep.rating}
                reviewsCount={rep.reviewsCount}
              />
              {index < representatives.length - 1 && <VerticalDivider />}
            </CardItem>
          ))}
        </CardListWrapper>
      </Content>
    </Container>
  );
}
