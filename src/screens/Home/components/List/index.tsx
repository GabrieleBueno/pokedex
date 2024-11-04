import { FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import ListItem from '@/components/ListItem';
import { FooterLoading } from '@/components/FooterLoading';

import { UseGetPokemonsResult } from '@/service/hooks/useGetPokemons';

import type { Pokemon } from '@/service/types';
import type { RootStackParamList } from '@/routes/types';

import { Container } from './styles';

type ListProps = Omit<UseGetPokemonsResult, 'error'>;

export function List({ pokemons, fetchNextPage, isLoading }: ListProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToDetails = (id: string) => {
    navigation.navigate('PokemonDetails', { id });
  };

  const renderItem = ({ item }: { item: Pokemon }) => (
    <ListItem onPress={() => navigateToDetails(item.id)} pokemon={item} />
  );

  const renderListFooter = () => {
    if (!isLoading || !pokemons.length) return null;

    return <FooterLoading />;
  };

  return (
    <Container>
      <FlatList
        data={pokemons}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => `${item.id}-${item.name}`}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderListFooter}
      />
    </Container>
  );
}
