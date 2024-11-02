import { TextInputProps } from 'react-native';
import { Container, Input } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';

type SearchProps = TextInputProps & {
  onSearch: (text: string) => void;
};

export function Search({ onSearch, ...rest }: SearchProps) {
  return (
    <Container>
      <AntDesign name="search1" size={20} color="black" />
      <Input {...rest} onChangeText={onSearch} />
    </Container>
  );
}
