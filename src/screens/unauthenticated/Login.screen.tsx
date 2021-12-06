import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Center, Heading, Text } from 'native-base';

const LoginScreen = () => (
  <Center flex={1} px={4}>
    <StatusBar style="auto" />
    <Heading>Login</Heading>
    <Text textAlign="center">Real content coming soon</Text>
  </Center>
);

export default LoginScreen;
