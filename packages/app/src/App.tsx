import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Navigation from './navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
};

export default registerRootComponent(App);
