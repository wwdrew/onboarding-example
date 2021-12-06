import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UnauthenticatedStackParamList } from '../../navigation/unauthenticated.stack';

interface Props
  extends NativeStackScreenProps<UnauthenticatedStackParamList, 'Name'> {}

const NameScreen = ({ navigation }: Props) => (
  <Center flex={1} px={4}>
    <StatusBar style="auto" />
    <Heading>What should we call you?</Heading>
    <Input variant="underlined" placeholder="first name" />
    <Button onPress={() => navigation.navigate('Email')}>Continue</Button>
  </Center>
);

export default NameScreen;
