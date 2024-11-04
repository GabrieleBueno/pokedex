import { MainInfo } from '@/components/MainInfo';

import type { PokemonMainInfo } from '@/service/types';

import { Container } from './styles';

export function PokemonInfo({ mainInfo }: { mainInfo: PokemonMainInfo[] }) {
  if (!mainInfo) return;

  return (
    <Container>
      {mainInfo.map((info) => (
        <MainInfo
          key={info.description}
          value={info.value}
          icon={info.icon}
          measure={info.measure}
          description={info.description}
          hideSeparator={info.hideSeparator}
        />
      ))}
    </Container>
  );
}
