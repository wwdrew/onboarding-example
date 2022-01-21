import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@screens/authenticated/Home.screen';

export type AuthenticatedStackParamList = {
  Home: undefined;
};

const Authenticated = createNativeStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedStack = () => (
  <Authenticated.Navigator>
    <Authenticated.Screen name="Home" component={HomeScreen} />
  </Authenticated.Navigator>
);

export default AuthenticatedStack;
