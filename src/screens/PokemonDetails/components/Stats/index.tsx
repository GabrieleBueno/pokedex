import { StatItem } from '@/components/StatItem';

import type { PokemonsStats } from '@/service/types';

import { Container } from './styles';

type StatsProps = {
  stats: PokemonsStats[];
  color: string;
};

export function Stats({ stats, color }: StatsProps) {
  return (
    <Container>
      {stats.map((stat) => (
        <StatItem
          key={stat.name}
          title={stat.name}
          value={stat.value}
          color={color}
        />
      ))}
    </Container>
  );
}
