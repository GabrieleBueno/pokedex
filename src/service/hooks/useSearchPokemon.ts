import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { getPokemonDetails } from '../getPokemonDetails';

import type { RootStackParamList } from '@/routes/types';

type UseSearchPokemonResult = {
  isLoading: boolean;
  error: string | null;
  fetchSearchPokemon: () => void;
};

export const useSearchPokemon = (value: string): UseSearchPokemonResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const fetchSearchPokemon = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getPokemonDetails(value);

      if (!Object.keys(data).length) {
        Alert.alert(
          'No Results',
          "We couldn't find any Pokémon matching your search."
        );

        return;
      }

      const id = data.id.toString();
      navigation.navigate('PokemonDetails', { id });
    } catch (error) {
      setError('Error fetching Pokémons');
    } finally {
      setIsLoading(false);
    }
  }, [value]);

  return { isLoading, error, fetchSearchPokemon };
};
