import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPasswordScreen from '../screens/unauthenticated/ForgotPassword.screen';
import LoginScreen from '../screens/unauthenticated/Login.screen';
import SignupStack, { SignupStackParamList } from './signup.stack';
import WelcomeScreen from '../screens/unauthenticated/Welcome.screen';

export type UnauthenticatedStackParamList = {
  ForgotPassword: undefined;
  Login: undefined;
  Signup: NavigatorScreenParams<SignupStackParamList>;
  Welcome: undefined;
};

const Unauthenticated =
  createNativeStackNavigator<UnauthenticatedStackParamList>();

const UnauthenticatedStack = () => (
  <Unauthenticated.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Unauthenticated.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
    />
    <Unauthenticated.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: true,
      }}
    />
    <Unauthenticated.Screen name="Signup" component={SignupStack} />
    <Unauthenticated.Screen name="Welcome" component={WelcomeScreen} />
  </Unauthenticated.Navigator>
);

export default UnauthenticatedStack;
