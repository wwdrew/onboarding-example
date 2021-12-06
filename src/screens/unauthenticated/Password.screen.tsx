import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UnauthenticatedStackParamList } from '../../navigation/unauthenticated.stack';

interface Props
  extends NativeStackScreenProps<UnauthenticatedStackParamList, 'Password'> {}

const PasswordScreen = ({ navigation }: Props) => (
  <Center flex={1} px={4}>
    <StatusBar style="auto" />
    <Heading>Password</Heading>
    <Input variant="underlined" placeholder="password" type="password" />
    <Button onPress={() => navigation.navigate('Confirmation')}>
      Continue
    </Button>
  </Center>
);

export default PasswordScreen;
