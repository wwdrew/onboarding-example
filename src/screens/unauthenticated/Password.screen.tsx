import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input, Text } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { UnauthenticatedStackParamList } from '../../navigation/unauthenticated.stack';

const PasswordSchema = Yup.object().shape({
  password: Yup.string().min(6).required(),
});

interface Props
  extends NativeStackScreenProps<UnauthenticatedStackParamList, 'Password'> {}

const PasswordScreen = ({ navigation }: Props) => {
  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: '',
    },
    onSubmit: () => {
      navigation.navigate('Confirmation');
    },
    validationSchema: PasswordSchema,
  });

  return (
    <Center flex={1} px={4}>
      <StatusBar style="auto" />
      <Heading>Password</Heading>
      <Input
        mb="2"
        width="full"
        autoCompleteType="password"
        variant="underlined"
        placeholder="password"
        type="password"
        value={values.password}
        returnKeyType="go"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
      />
      {errors.password && <Text w="full">Password invalid</Text>}

      <Button onPress={() => handleSubmit()} w="full">
        Continue
      </Button>
    </Center>
  );
};

export default PasswordScreen;
