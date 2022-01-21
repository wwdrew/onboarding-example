import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { render } from '@test/test-utils';
import { SignupStackParamList } from '@module/signup/navigation/signup.stack';

import PasswordScreen from '../Password.screen';

describe('Password Screen', () => {
  it('should display password text on screen', () => {
    const Stack = createNativeStackNavigator<SignupStackParamList>();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Password" component={PasswordScreen} />
      </Stack.Navigator>,
    );

    expect(getByText(/password/i)).toBeDefined();
  });
});
