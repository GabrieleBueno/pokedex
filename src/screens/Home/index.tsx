import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { FlatList } from 'react-native';
import ListItem from '@/components/ListItem';
import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import { useGetPokemons } from '@/service/hooks/useGetPokemons';
import { FooterLoading } from '@/components/FooterLoading';

export function Home() {
  const { pokemons, isLoading, fetchNextPage } = useGetPokemons();

  const renderItem = ({ item }) => {
    return <ListItem {...item} />;
  };

  const renderListFooter = () => {
    if (!isLoading || !pokemons.length) return null;

    return <FooterLoading />;
  };

  const handleSearch = () => {};

  return (
    <Container>
      <Header />

      <Search
        placeholder="Type the Pokémon name"
        onSearch={handleSearch}
        autoCorrect={false}
      />

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
