import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Link,
  Text,
} from 'native-base';
import { CompositeScreenProps } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SignupStackParamList } from '../../../navigation/signup.stack';
import { UnauthenticatedStackParamList } from '../../../navigation/unauthenticated.stack';
import useSignup from '../../../hooks/useSignup';

interface Props
  extends CompositeScreenProps<
    NativeStackScreenProps<SignupStackParamList, 'Confirmation'>,
    NativeStackScreenProps<UnauthenticatedStackParamList>
  > {}

const ConfirmationScreen = ({ navigation }: Props) => {
  const { createUser, state } = useSignup();

  const onNameEditPress = () => {
    navigation.push('Name', { edit: true });
  };

  const onEmailEditPress = () => {
    navigation.push('Email', { edit: true });
  };

  const onPasswordEditPress = () => {
    navigation.push('Password', { edit: true });
  };

  const onAcceptAndContinuePress = () => {
    createUser(state);
  };

  return (
    <Center flex={1} px={4}>
      <StatusBar style="auto" />
      <Heading>Confirm Your Details</Heading>

      <Container
        w="full"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box>
          <Text>Name</Text>
          <Text>{state.name}</Text>
        </Box>
        <Link onPress={onNameEditPress}>Edit</Link>
      </Container>
      <Container
        w="full"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box>
          <Text>Email</Text>
          <Text>{state.email}</Text>
        </Box>
        <Link onPress={onEmailEditPress}>Edit</Link>
      </Container>
      <Container
        w="full"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box>
          <Text>Password</Text>
          <Text>*******</Text>
        </Box>
        <Link onPress={onPasswordEditPress}>Edit</Link>
      </Container>

      <Button onPress={onAcceptAndContinuePress}>Accept and Continue</Button>

      <Link onPress={() => navigation.navigate('Welcome')}>
        You know what? Forget it...
      </Link>
    </Center>
  );
};

export default ConfirmationScreen;
