import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnauthenticatedStack from './src/navigation/unauthenticated.stack';

export default function App() {
  return (
    <NavigationContainer>
      <UnauthenticatedStack />
    </NavigationContainer>
  );
}
