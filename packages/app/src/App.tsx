import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useColorScheme } from 'react-native';

import Navigation from './navigation';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <StatusBar style="auto" />
    </>
  );
};

export default registerRootComponent(App);
