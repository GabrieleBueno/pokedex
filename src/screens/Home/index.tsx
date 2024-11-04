import React, { useCallback, useState } from 'react';

import { Loading } from '@/components/Loading';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { List } from './components/List';

import { useGetPokemons } from '@/service/hooks/useGetPokemons';
import { useSearchPokemon } from '@/service/hooks/useSearchPokemon';

import { Container } from './styles';

export function Home() {
  const [searchText, setSearchText] = useState('');

  const { pokemons, isLoading, fetchNextPage } = useGetPokemons();
  const { isLoading: isLoadingSearch, fetchSearchPokemon } = useSearchPokemon(
    searchText.toLocaleLowerCase()
  );

  const handleSearch = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const onSearch = useCallback(() => {
    if (!searchText) return;
    fetchSearchPokemon();
    setSearchText('');
  }, [searchText, fetchSearchPokemon]);

  if (isLoadingSearch) return <Loading />;

  return (
    <Container>
      <Header />

      <Search
        value={searchText}
        onChangeText={handleSearch}
        onPressSearch={onSearch}
      />

      <List
        pokemons={pokemons}
        fetchNextPage={fetchNextPage}
        isLoading={isLoading}
      />
    </Container>
  );
}
