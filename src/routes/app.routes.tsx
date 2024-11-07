import { createNativeStackNavigator } from '@react-navigation/native-stack';

import theme from '@/theme';
import { Home } from '@/screens/Home';
import { PokemonDetails } from '@/screens/PokemonDetails';

import type { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={{
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: theme.COLORS.PRIMARY,
        }}
      />
    </Navigator>
  );
}
