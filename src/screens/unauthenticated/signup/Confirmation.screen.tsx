import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Link } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SignupStackParamList } from '../../../navigation/signup.stack';
import { CompositeScreenProps } from '@react-navigation/core';
import { UnauthenticatedStackParamList } from '../../../navigation/unauthenticated.stack';

interface Props
  extends CompositeScreenProps<
    NativeStackScreenProps<SignupStackParamList, 'Confirmation'>,
    NativeStackScreenProps<UnauthenticatedStackParamList>
  > {}

const ConfirmationScreen = ({ navigation }: Props) => (
  <Center flex={1} px={4}>
    <StatusBar style="auto" />
    <Heading>Confirm Your Details</Heading>
    <Button onPress={() => console.log('Accept')}>Accept and Continue</Button>
    <Link onPress={() => navigation.navigate('Welcome')}>
      You know what? Forget it...
    </Link>
  </Center>
);

export default ConfirmationScreen;
