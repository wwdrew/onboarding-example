import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input, Text } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { SignupStackParamList } from '../../../navigation/signup.stack';
import useSignup from '../../../hooks/useSignup';

const NameSchema = Yup.object().shape({
  name: Yup.string().required(),
});

interface Props extends NativeStackScreenProps<SignupStackParamList, 'Name'> {}

const NameScreen = ({ navigation }: Props) => {
  const { update } = useSignup();
  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: ({ name }) => {
      update({ name });
      navigation.navigate('Email');
    },
    validationSchema: NameSchema,
  });

  return (
    <Center flex={1} px={4}>
      <StatusBar style="auto" />
      <Heading>What should we call you?</Heading>
      <Input
        mb="2"
        w="full"
        autoFocus={true}
        variant="underlined"
        placeholder="first name"
        value={values.name}
        returnKeyType="go"
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
      />
      {errors.name && <Text w="full">{errors.name}</Text>}

      <Button onPress={() => handleSubmit()} w="full">
        Continue
      </Button>
    </Center>
  );
};

export default NameScreen;
