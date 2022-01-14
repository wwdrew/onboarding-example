import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input, Link, Text } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAuthentication } from '@module/authentication';
import { UnauthenticatedStackParamList } from '@navigation/unauthenticated.stack';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: Yup.string()
    .min(6, 'Password too short')
    .required('Password is required'),
});

interface Props
  extends NativeStackScreenProps<UnauthenticatedStackParamList, 'Login'> {}

function LoginScreen({ navigation }: Props) {
  const { setAuthenticated } = useAuthentication();
  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      setAuthenticated(true);
    },
    validationSchema: LoginSchema,
  });

  return (
    <Center flex={1} px={4}>
      <StatusBar style="auto" />
      <Heading mb="4">Login</Heading>

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
      {errors.password && <Text w="full">{errors.password}</Text>}

      <Button
        disabled={Object.keys(errors).length > 0}
        onPress={() => handleSubmit()}
        mb="2"
        w="full"
      >
        Continue
      </Button>

      <Link onPress={() => navigation.navigate('ForgotPassword')}>
        Have you forgotten your password?
      </Link>
    </Center>
  );
}

export default LoginScreen;
