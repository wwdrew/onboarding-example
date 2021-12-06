import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Center, Heading, Text } from 'native-base';

const NameScreen = () => (
  <Center flex={1} px={4}>
    <StatusBar style="auto" />
    <Heading>What should we call you?</Heading>
    <Text textAlign="center">Real content coming soon</Text>
  </Center>
);

export default NameScreen;
