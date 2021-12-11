import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';


import Routes from './src/routes';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold,
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}
