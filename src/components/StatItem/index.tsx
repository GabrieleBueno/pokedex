import {
  Container,
  TitleContainer,
  Title,
  StatValueContainer,
  Value,
  ProgressBar,
  Progress,
} from './styles';

type StatItemProps = {
  title: string;
  value: number;
  color: string;
};

export function StatItem({ title, value, color }: StatItemProps) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <StatValueContainer>
        <Value>{value}</Value>
        <ProgressBar>
          <Progress progress={value} bgColor={color} />
        </ProgressBar>
      </StatValueContainer>
    </Container>
  );
}
