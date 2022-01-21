import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Center, Heading, Input, Text } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SignupStackParamList } from '@module/signup/navigation/signup.stack';
import { useSignup } from '@module/signup/hooks/useSignup';

const NameSchema = Yup.object().shape({
  name: Yup.string().required('A name is required'),
});

interface Props extends NativeStackScreenProps<SignupStackParamList, 'Name'> {}

function NameScreen({ navigation, route }: Props) {
  const { edit } = route.params ?? { edit: false };
  const { state, update } = useSignup();
  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: state.name,
    },
    onSubmit: ({ name }) => {
      update({ name });

      if (edit) {
        navigation.goBack();
        return;
      }

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

      <Button
        disabled={Object.keys(errors).length > 0}
        onPress={() => handleSubmit()}
        w="full"
      >
        {edit ? 'Save' : 'Continue'}
      </Button>
    </Center>
  );
}

export default NameScreen;
