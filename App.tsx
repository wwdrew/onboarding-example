import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import { AuthenticationProvider } from '@module/authentication';
import { AppStack } from '@navigation/app.stack';

export default function App() {
  return (
    <AuthenticationProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthenticationProvider>
  );
}
