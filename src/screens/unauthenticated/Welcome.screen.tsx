import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Link, Text } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UnauthenticatedStackParamList } from '../../navigation/unauthenticated.stack';

interface Props
  extends NativeStackScreenProps<UnauthenticatedStackParamList, 'Welcome'> {}

const WelcomeScreen = ({ navigation }: Props) => (
  <Center flex={1} px={4}>
    <StatusBar style="auto" />
    <Heading>Drew's Awesome App!</Heading>
    <Text textAlign="center">
      The fastest way to make money on the Internet...
    </Text>
    <Button
      onPress={() =>
        navigation.navigate('Signup', { screen: 'Name', initial: false })
      }
    >
      Sign up to Make it Rain!
    </Button>
    <Link onPress={() => navigation.navigate('Login')}>
      ... or sign in if it's already raining for you
    </Link>
  </Center>
);

export default WelcomeScreen;
