import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignupStackParamList } from '../../../../navigation/signup.stack';
import { render } from '../../../../../jest/test-utils';
import NameScreen from '../Name.screen';

describe('Name Screen', () => {
  it('should display name text on screen', () => {
    const Stack = createNativeStackNavigator<SignupStackParamList>();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Name" component={NameScreen} />
      </Stack.Navigator>,
    );

    expect(getByText(/what should we call you?/i)).toBeDefined();
  });
});
