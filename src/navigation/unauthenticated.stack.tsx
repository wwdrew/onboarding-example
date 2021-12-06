import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfirmationScreen from '../screens/unauthenticated/Confirmation.screen';
import EmailScreen from '../screens/unauthenticated/Email.screen';
import ForgotPasswordScreen from '../screens/unauthenticated/ForgotPassword.screen';
import LoginScreen from '../screens/unauthenticated/Login.screen';
import NameScreen from '../screens/unauthenticated/Name.screen';
import PasswordScreen from '../screens/unauthenticated/Password.screen';
import WelcomeScreen from '../screens/unauthenticated/Welcome.screen';

export type UnauthenticatedStackParamList = {
  Confirmation: undefined;
  Email: undefined;
  ForgotPassword: undefined;
  Login: undefined;
  Name: undefined;
  Password: undefined;
  Welcome: undefined;
};

const Unauthenticated =
  createNativeStackNavigator<UnauthenticatedStackParamList>();

const UnauthenticatedStack = () => (
  <Unauthenticated.Navigator initialRouteName="Welcome">
    <Unauthenticated.Screen
      name="Confirmation"
      component={ConfirmationScreen}
    />
    <Unauthenticated.Screen name="Email" component={EmailScreen} />
    <Unauthenticated.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
    />
    <Unauthenticated.Screen name="Login" component={LoginScreen} />
    <Unauthenticated.Screen name="Name" component={NameScreen} />
    <Unauthenticated.Screen name="Password" component={PasswordScreen} />
    <Unauthenticated.Screen name="Welcome" component={WelcomeScreen} />
  </Unauthenticated.Navigator>
);

export default UnauthenticatedStack;
