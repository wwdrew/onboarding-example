import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import AuthenticatedStack from './src/navigation/authenticated.stack';
import UnauthenticatedStack from './src/navigation/unauthenticated.stack';

export default function App() {
  const authenticated = false;

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {authenticated ? <AuthenticatedStack /> : <UnauthenticatedStack />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
