import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { Loading } from '@/components/Loading';
import { Home } from '@/screens/Home';

// import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {/* <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}> */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        // translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
      {/* </SafeAreaView> */}
    </ThemeProvider>
  );
}
