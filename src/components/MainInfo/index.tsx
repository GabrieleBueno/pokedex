import FontAwesome from '@expo/vector-icons/FontAwesome5';

import {
  Container,
  TitleContainer,
  IconContainer,
  Title,
  Description,
} from './styles';

type MainInfoProps = {
  value: string;
  description: string;
  icon?: string;
  measure?: string;
  hideSeparator?: boolean;
};

export function MainInfo({
  value,
  description,
  icon,
  measure,
  hideSeparator = false,
}: MainInfoProps) {
  return (
    <Container hideSeparator={hideSeparator}>
      <Description>{description}</Description>
      <TitleContainer>
        {!!icon && (
          <IconContainer>
            <FontAwesome name={icon} />
          </IconContainer>
        )}
        <Title>
          {value}
          {measure}
        </Title>
      </TitleContainer>
    </Container>
  );
}
