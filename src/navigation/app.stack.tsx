import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnauthenticatedStack, {
  UnauthenticatedStackParamList,
} from './unauthenticated.stack';
import AuthenticatedStack, {
  AuthenticatedStackParamList,
} from './authenticated.stack';
import { useAuthentication } from '@module/authentication';

export type RootStackParamList = {
  Unauthenticated: NavigatorScreenParams<UnauthenticatedStackParamList>;
  Authenticated: NavigatorScreenParams<AuthenticatedStackParamList>;
};

const App = createNativeStackNavigator<RootStackParamList>();

export const AppStack = () => {
  const { authenticated } = useAuthentication();

  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      {authenticated ? (
        <App.Screen name="Authenticated" component={AuthenticatedStack} />
      ) : (
        <App.Screen name="Unauthenticated" component={UnauthenticatedStack} />
      )}
    </App.Navigator>
  );
};
