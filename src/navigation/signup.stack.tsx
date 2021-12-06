import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmailScreen from '../screens/unauthenticated/signup/Email.screen';
import ConfirmationScreen from '../screens/unauthenticated/signup/Confirmation.screen';
import NameScreen from '../screens/unauthenticated/signup/Name.screen';
import PasswordScreen from '../screens/unauthenticated/signup/Password.screen';

export type SignupStackParamList = {
  Confirmation: undefined;
  Email: undefined;
  Name: undefined;
  Password: undefined;
};

const Signup = createNativeStackNavigator<SignupStackParamList>();

const SignupStack = () => (
  <Signup.Navigator initialRouteName="Name">
    <Signup.Screen name="Confirmation" component={ConfirmationScreen} />
    <Signup.Screen name="Email" component={EmailScreen} />
    <Signup.Screen name="Name" component={NameScreen} />
    <Signup.Screen name="Password" component={PasswordScreen} />
  </Signup.Navigator>
);

export default SignupStack;
