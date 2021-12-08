import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmailScreen from '../screens/unauthenticated/signup/Email.screen';
import ConfirmationScreen from '../screens/unauthenticated/signup/Confirmation.screen';
import NameScreen from '../screens/unauthenticated/signup/Name.screen';
import PasswordScreen from '../screens/unauthenticated/signup/Password.screen';
import { SignupProvider } from '../hooks/useSignup';

export type SignupStackParamList = {
  Confirmation: undefined;
  Email: { edit: boolean } | undefined;
  Name: { edit: boolean } | undefined;
  Password: { edit: boolean } | undefined;
};

const Signup = createNativeStackNavigator<SignupStackParamList>();

const SignupStack = () => (
  <SignupProvider>
    <Signup.Navigator initialRouteName="Name">
      <Signup.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{
          headerBackVisible: false,
        }}
      />
      <Signup.Screen name="Email" component={EmailScreen} />
      <Signup.Screen name="Name" component={NameScreen} />
      <Signup.Screen name="Password" component={PasswordScreen} />
    </Signup.Navigator>
  </SignupProvider>
);

export default SignupStack;
