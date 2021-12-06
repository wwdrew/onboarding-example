import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/unauthenticated/Welcome.screen';

export type UnauthenticatedStackParamList = {
  Welcome: undefined;
};

const Unauthenticated =
  createNativeStackNavigator<UnauthenticatedStackParamList>();

const UnauthenticatedStack = () => (
  <Unauthenticated.Navigator>
    <Unauthenticated.Screen name="Welcome" component={WelcomeScreen} />
  </Unauthenticated.Navigator>
);

export default UnauthenticatedStack;
