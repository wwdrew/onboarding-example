import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fireEvent, render } from '../../../../jest/test-utils';

import SignupStack from '../../../navigation/signup.stack';
import LoginScreen from '../Login.screen';
import WelcomeScreen from '../Welcome.screen';

describe('Welcome Screen', () => {
  it('should display welcome text on screen', () => {
    const Stack = createNativeStackNavigator();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>,
    );

    expect(getByText(/drew's awesome app/i)).toHaveTextContent(
      "Drew's Awesome App",
    );
  });

  it('should navigate to sign up screen', () => {
    const Stack = createNativeStackNavigator();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={SignupStack} />
      </Stack.Navigator>,
    );

    fireEvent.press(getByText(/sign up/i));

    expect(getByText(/what should we call you?/i)).toBeDefined();
  });

  it('should navigate to login screen', () => {
    const Stack = createNativeStackNavigator();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>,
    );

    fireEvent.press(getByText(/sign in/i));

    expect(getByText(/login/i)).toBeDefined();
  });
});
