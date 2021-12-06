import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input, Link } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UnauthenticatedStackParamList } from '../../navigation/unauthenticated.stack';

interface Props
  extends NativeStackScreenProps<UnauthenticatedStackParamList, 'Login'> {}

const LoginScreen = ({ navigation }: Props) => (
  <Center flex={1} px={4}>
    <StatusBar style="auto" />
    <Heading>Login</Heading>
    <Input variant="underlined" placeholder="email address" />
    <Input variant="underlined" placeholder="password" type="password" />
    <Button onPress={() => console.log('Login')}>Continue</Button>
    <Link onPress={() => navigation.navigate('ForgotPassword')}>
      Have you forgotten your password?
    </Link>
  </Center>
);

export default LoginScreen;
