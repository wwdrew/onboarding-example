import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignupStackParamList } from '../../../../navigation/signup.stack';
import { render } from '../../../../../jest/test-utils';
import ConfirmationScreen from '../Confirmation.screen';

describe('Confirmation Screen', () => {
  it('should display confirmation text on screen', () => {
    const Stack = createNativeStackNavigator<SignupStackParamList>();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>,
    );

    expect(getByText(/confirm your details/i)).toBeDefined();
  });
});
