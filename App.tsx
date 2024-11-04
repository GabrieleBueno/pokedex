import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Routes } from '@/routes';
import { Loading } from '@/components/Loading';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (__DEV__) {
    require('./ReactotronConfig');
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
