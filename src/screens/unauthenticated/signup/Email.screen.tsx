import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input, Text } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { SignupStackParamList } from '../../../navigation/signup.stack';
import useSignup from '../../../hooks/useSignup';

const EmailSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

interface Props extends NativeStackScreenProps<SignupStackParamList, 'Email'> {}

const EmailScreen = ({ navigation }: Props) => {
  const { update } = useSignup();
  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: ({ email }) => {
      update({ email });
      navigation.navigate('Password');
    },
    validationSchema: EmailSchema,
  });

  return (
    <Center flex={1} px={4}>
      <StatusBar style="auto" />
      <Heading>Email Address</Heading>
      <Input
        mb="2"
        w="full"
        autoCapitalize="none"
        autoCompleteType="email"
        autoFocus={true}
        variant="underlined"
        placeholder="email address"
        value={values.email}
        keyboardType="email-address"
        returnKeyType="next"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
      />
      {errors.email && <Text w="full">{errors.email}</Text>}

      <Button onPress={() => handleSubmit()} w="full">
        Continue
      </Button>
    </Center>
  );
};

export default EmailScreen;
