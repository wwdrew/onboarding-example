import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fireEvent, render, waitFor } from '../../../../jest/test-utils';

import LoginScreen from '../Login.screen';
import ForgotPasswordScreen from '../ForgotPassword.screen';
import { UnauthenticatedStackParamList } from '../../../navigation/unauthenticated.stack';

describe('Login Screen', () => {
  it('should display login form on screen', () => {
    const Stack = createNativeStackNavigator<UnauthenticatedStackParamList>();

    const { getByText, getByPlaceholderText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>,
    );

    expect(getByText(/login/i)).toBeDefined();
    expect(getByPlaceholderText(/email address/i)).toBeDefined();
    expect(getByPlaceholderText(/password/i)).toBeDefined();
  });

  it('should navigate to forgotten password screen', () => {
    const Stack = createNativeStackNavigator();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>,
    );

    fireEvent.press(getByText(/forgotten your password/i));

    expect(getByText(/forgot Your password?/i)).toBeDefined();
  });

  it('should work', async () => {
    const Stack = createNativeStackNavigator();

    const { getByText, getByPlaceholderText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>,
    );

    const emailField = getByPlaceholderText(/email address/i);
    const passwordField = getByPlaceholderText(/password/i);

    await waitFor(() => {
      fireEvent.changeText(emailField, 'test@test.com');
      fireEvent.changeText(passwordField, 'testPassword');
      fireEvent.press(getByText(/continue/i));
    });

    // debug();
  });
});
