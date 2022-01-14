import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { render } from '@jest/test-utils';
import { AuthenticatedStackParamList } from '@navigation/authenticated.stack';

import HomeScreen from '../Home.screen';

describe('Home Screen', () => {
  it('should display home text on screen', () => {
    const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>,
    );

    expect(getByText(/drew's awesome app!/i)).toBeDefined();
    expect(getByText(/buy low! sell high!/i)).toBeDefined();
  });
});
