import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UnauthenticatedStackParamList } from '../../navigation/unauthenticated.stack';

interface Props
  extends NativeStackScreenProps<UnauthenticatedStackParamList, 'Email'> {}

const EmailScreen = ({ navigation }: Props) => (
  <Center flex={1} px={4}>
    <StatusBar style="auto" />
    <Heading>Email Address</Heading>
    <Input variant="underlined" placeholder="email address" />
    <Button onPress={() => navigation.navigate('Password')}>Continue</Button>
  </Center>
);

export default EmailScreen;
