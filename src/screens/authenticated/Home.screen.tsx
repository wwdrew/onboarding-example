import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Center, Heading, Text } from 'native-base';

function HomeScreen() {
  return (
    <Center flex={1} px={4}>
      <StatusBar style="auto" />
      <Heading>Drew's Awesome App!</Heading>
      <Text textAlign="center">Buy low! Sell high!</Text>
    </Center>
  );
}

export default HomeScreen;
