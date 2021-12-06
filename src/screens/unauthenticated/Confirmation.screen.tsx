import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Center, Heading, Text } from 'native-base';

const ConfirmationScreen = () => (
  <Center flex={1} px={4}>
    <StatusBar style="auto" />
    <Heading>Confirm Your Details</Heading>
    <Text textAlign="center">Real content coming soon</Text>
  </Center>
);

export default ConfirmationScreen;
