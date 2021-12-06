import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input, Text } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { UnauthenticatedStackParamList } from '../../navigation/unauthenticated.stack';

const NameSchema = Yup.object().shape({
  name: Yup.string().required(),
});

interface Props
  extends NativeStackScreenProps<UnauthenticatedStackParamList, 'Name'> {}

const NameScreen = ({ navigation }: Props) => {
  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: () => {
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
      {errors.name && <Text w="full">Email address invalid</Text>}

      <Button onPress={() => handleSubmit()} w="full">
        Continue
      </Button>
    </Center>
  );
};

export default NameScreen;
