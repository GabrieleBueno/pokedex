import AntDesign from '@expo/vector-icons/AntDesign';

import { Container, Input, SearchButton } from './styles';

type SearchProps = {
  value: string;
  onChangeText: (text: string) => void;
  onPressSearch: () => void;
};

export function Search({ value, onChangeText, onPressSearch }: SearchProps) {
  return (
    <Container>
      <Input
        value={value}
        placeholder="Type the Pokémon name or id"
        onChangeText={onChangeText}
        onSubmitEditing={onPressSearch}
      />
      <SearchButton onPress={onPressSearch}>
        <AntDesign name="search1" size={20} color="white" />
      </SearchButton>
    </Container>
  );
}
