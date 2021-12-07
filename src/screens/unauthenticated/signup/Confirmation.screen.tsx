import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Container, Heading, Link, Text } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SignupStackParamList } from '../../../navigation/signup.stack';
import { CompositeScreenProps } from '@react-navigation/core';
import { UnauthenticatedStackParamList } from '../../../navigation/unauthenticated.stack';
import useSignup from '../../../hooks/useSignup';

interface Props
  extends CompositeScreenProps<
    NativeStackScreenProps<SignupStackParamList, 'Confirmation'>,
    NativeStackScreenProps<UnauthenticatedStackParamList>
  > {}

const ConfirmationScreen = ({ navigation }: Props) => {
  const { state } = useSignup();

  return (
    <Center flex={1} px={4}>
      <StatusBar style="auto" />
      <Heading>Confirm Your Details</Heading>
      <Container w="full">
        <Text>Name</Text>
        <Text>{state.name}</Text>
      </Container>
      <Container w="full">
        <Text>Email</Text>
        <Text>{state.email}</Text>
      </Container>
      <Container w="full">
        <Text>Password</Text>
        <Text>*******</Text>
      </Container>
      <Button onPress={() => console.log('Accept')}>Accept and Continue</Button>
      <Link onPress={() => navigation.navigate('Welcome')}>
        You know what? Forget it...
      </Link>
    </Center>
  );
};

export default ConfirmationScreen;
