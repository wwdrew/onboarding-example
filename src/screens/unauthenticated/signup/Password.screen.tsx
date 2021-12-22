import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input, Text } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { SignupStackParamList } from '../../../navigation/signup.stack';
import { useSignup } from '../../../modules/signup';

const PasswordSchema = Yup.object().shape({
  password: Yup.string().min(6).required(),
});

interface Props
  extends NativeStackScreenProps<SignupStackParamList, 'Password'> {}

function PasswordScreen({ navigation, route }: Props) {
  const { edit } = route.params ?? { edit: false };
  const { state, update } = useSignup();
  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: state.password,
    },
    onSubmit: ({ password }) => {
      update({ password });

      if (edit) {
        navigation.goBack();
        return;
      }

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
      {errors.password && <Text w="full">{errors.password}</Text>}

      <Button onPress={() => handleSubmit()} w="full">
        {edit ? 'Save' : 'Continue'}
      </Button>
    </Center>
  );
}

export default PasswordScreen;
