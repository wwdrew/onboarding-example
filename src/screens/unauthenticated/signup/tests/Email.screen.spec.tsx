import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { render } from '@test/test-utils';
import { SignupStackParamList } from '@module/signup/navigation/signup.stack';

import { EmailScreen } from '../Email.screen';

describe('Email Screen', () => {
  it('should display email text on screen', () => {
    const Stack = createNativeStackNavigator<SignupStackParamList>();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Email" component={EmailScreen} />
      </Stack.Navigator>,
    );

    expect(getByText(/email address/i)).toBeDefined();
  });
});
