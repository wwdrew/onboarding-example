import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { fireEvent, render, waitFor } from '@test/test-utils';
import { UnauthenticatedStackParamList } from '@navigation/unauthenticated.stack';

import { ForgotPasswordScreen } from '../ForgotPassword.screen';
import { LoginScreen } from '../Login.screen';

describe('ForgotPassword Screen', () => {
  it('should display forgot password text on screen', () => {
    const Stack = createNativeStackNavigator<UnauthenticatedStackParamList>();

    const { getByText } = render(
      <Stack.Navigator>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>,
    );

    expect(getByText(/forgot your password?/i)).toBeDefined();
  });

  it('should navigate to login screen after entering email address', async () => {
    const Stack = createNativeStackNavigator<UnauthenticatedStackParamList>();

    const { getByText, getByPlaceholderText } = render(
      <Stack.Navigator>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>,
    );

    fireEvent.changeText(
      getByPlaceholderText(/email address/i),
      'test@test.com',
    );
    fireEvent.press(getByText(/continue/i));

    await waitFor(() => {
      expect(getByText(/login/i)).toBeDefined();
    });
  });

  describe('invalid form values', () => {
    describe('email field', () => {
      it('should not accept an invalid email address', async () => {
        const Stack =
          createNativeStackNavigator<UnauthenticatedStackParamList>();

        const { getByText, getByPlaceholderText } = render(
          <Stack.Navigator>
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </Stack.Navigator>,
        );

        const emailField = getByPlaceholderText(/email address/i);

        fireEvent.changeText(emailField, 'invalidEmailAddress');

        await waitFor(() => {
          expect(getByText(/email address invalid/i)).toBeDefined();
        });
      });
    });
  });
});
