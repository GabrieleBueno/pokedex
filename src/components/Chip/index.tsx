import { Container, Title } from './styles';

type ChipProps = {
  title: string;
  color: string;
};

export function Chip({ title, color }: ChipProps) {
  return (
    <Container bgColor={color}>
      <Title>{title}</Title>
    </Container>
  );
}
