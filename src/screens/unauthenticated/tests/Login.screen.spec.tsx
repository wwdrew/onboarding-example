import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fireEvent, render, waitFor } from '../../../../jest/test-utils';

import LoginScreen from '../Login.screen';
import ForgotPasswordScreen from '../ForgotPassword.screen';
import { UnauthenticatedStackParamList } from '../../../navigation/unauthenticated.stack';

describe('Login Screen', () => {
  it('should display login form on screen', () => {
    const Stack = createNativeStackNavigator<UnauthenticatedStackParamList>();

    const { getByText, getByPlaceholderText, queryByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>,
    );

    expect(getByText(/login/i)).toBeDefined();
    expect(getByPlaceholderText(/email address/i)).toBeDefined();
    expect(queryByText(/email address invalid/i)).toBeNull();
    expect(getByPlaceholderText(/password/i)).toBeDefined();
    expect(queryByText(/password invalid/i)).toBeNull();
    expect(getByText(/continue/i)).not.toBeDisabled();
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

    expect(getByText(/forgot your password?/i)).toBeDefined();
  });

  it('should authenticate if credentials are correct', async () => {
    const Stack = createNativeStackNavigator();

    const { getByText, getByPlaceholderText, queryByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>,
    );

    const continueButton = getByText(/continue/i);

    fireEvent.changeText(
      getByPlaceholderText(/email address/i),
      'test@test.com',
    );
    fireEvent.changeText(getByPlaceholderText(/password/i), 'testPassword');
    fireEvent.press(continueButton);

    await waitFor(() => {
      expect(queryByText(/email address invalid/i)).toBeNull();
      expect(queryByText(/password invalid/i)).toBeNull();
    });
    expect(continueButton).not.toBeDisabled();
  });

  describe('invalid form values', () => {
    describe('email field', () => {
      it('should not accept an invalid email address', async () => {
        const Stack = createNativeStackNavigator();

        const { getByText, getByPlaceholderText, findByText } = render(
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>,
        );

        fireEvent.changeText(
          getByPlaceholderText(/email address/i),
          'invalidEmailAddress',
        );

        expect(await findByText(/email address invalid/i)).toBeDefined();
        expect(getByText(/continue/i)).toBeDisabled();
      });
    });

    describe('password field', () => {
      it('should not accept an invalid password', async () => {
        const Stack = createNativeStackNavigator();

        const { getByText, getByPlaceholderText, findByText } = render(
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>,
        );

        fireEvent.changeText(getByPlaceholderText(/password/i), 'nope');

        expect(await findByText(/password too short/i)).toBeDefined();
        expect(getByText(/continue/i)).toBeDisabled();
      });
    });
  });
});
