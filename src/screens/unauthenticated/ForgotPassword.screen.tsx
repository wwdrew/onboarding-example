import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input, Text } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { UnauthenticatedStackParamList } from '../../navigation/unauthenticated.stack';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

interface Props
  extends NativeStackScreenProps<
    UnauthenticatedStackParamList,
    'ForgotPassword'
  > {}

function ForgotPasswordScreen({ navigation }: Props) {
  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      navigation.goBack();
    },
    validationSchema: ForgotPasswordSchema,
  });

  return (
    <Center flex={1} px={4}>
      <StatusBar style="auto" />
      <Heading>Forgot Your Password?</Heading>
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
      {errors.email && <Text w="full">Email address invalid</Text>}

      <Button onPress={() => handleSubmit()} w="full">
        Continue
      </Button>
    </Center>
  );
}

export default ForgotPasswordScreen;
