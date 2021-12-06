import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import UnauthenticatedStack from './src/navigation/unauthenticated.stack';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <UnauthenticatedStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
