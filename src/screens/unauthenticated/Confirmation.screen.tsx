import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Link } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UnauthenticatedStackParamList } from '../../navigation/unauthenticated.stack';

interface Props
  extends NativeStackScreenProps<
    UnauthenticatedStackParamList,
    'Confirmation'
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
