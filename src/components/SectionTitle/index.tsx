import { Container, Title } from './styles';

type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
