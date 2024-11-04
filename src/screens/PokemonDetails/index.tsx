import React, { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  Container,
  ColorContainer,
  DetailsContainer,
  Identification,
} from './styles';

import { Stats } from './components/Stats';
import { Avatar } from './components/Avatar';
import { PokemonInfo } from './components/PokemonInfo';
import { PokemonTypes } from './components/PokemonTypes';

import { Loading } from '@/components/Loading';
import { IconButton } from '@/components/IconButton';
import { SectionTitle } from '@/components/SectionTitle';

import { formatToThreeDigits } from '@/utils';
import { MAXIMUM_ID, MINIMUM_ID } from '@/constants';
import { useGetPokemonDetails } from '@/service/hooks/useGetPokemonDetails';

import type { RootStackParamList } from '@/routes/types';

type PokemonDetailsRouteProp = RouteProp<RootStackParamList, 'PokemonDetails'>;
type PokemonDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PokemonDetails'
>;

type Props = {
  route: PokemonDetailsRouteProp;
  navigation: PokemonDetailsNavigationProp;
};

export function PokemonDetails({ route, navigation }: Props) {
  const { id } = route.params;

  const [currentId, setCurrentId] = useState<string>(id);
  const { pokemonDetails, isLoading } = useGetPokemonDetails(currentId);

  const [type] = pokemonDetails.types ?? [];
  const currentIdNumber = parseInt(currentId, 10);

  const isMinimumId = currentIdNumber === MINIMUM_ID;
  const isMaximumId = currentIdNumber === MAXIMUM_ID;

  useEffect(() => {
    if (pokemonDetails) {
      navigation.setOptions({
        title: pokemonDetails.name,
        headerRight: () => (
          <Identification>{formatToThreeDigits(currentId)}</Identification>
        ),
      });
    }
  }, [pokemonDetails]);

  const nextPokemon = () => {
    if (isNaN(currentIdNumber) || currentIdNumber >= MAXIMUM_ID) return;
    const nextId = Number(currentId) + 1;
    setCurrentId(nextId.toString());
  };

  const previousPokemon = () => {
    if (isNaN(currentIdNumber) || currentIdNumber <= MINIMUM_ID) return;
    const previousId = currentIdNumber - 1;
    setCurrentId(previousId.toString());
  };

  if (isLoading) return <Loading />;

  return (
    <Container style={{ backgroundColor: type.color }}>
      <ColorContainer>
        <IconButton
          icon="left"
          onPress={previousPokemon}
          visible={!isMinimumId}
        />
        <IconButton icon="right" onPress={nextPokemon} visible={!isMaximumId} />
      </ColorContainer>
      <DetailsContainer>
        <Avatar image={pokemonDetails.image} />

        <PokemonTypes types={pokemonDetails.types} />

        <SectionTitle title="About" />

        <PokemonInfo mainInfo={pokemonDetails.mainInfo} />

        <SectionTitle title="Stats" />

        <Stats stats={pokemonDetails.stats} color={type.color} />
      </DetailsContainer>
    </Container>
  );
}
