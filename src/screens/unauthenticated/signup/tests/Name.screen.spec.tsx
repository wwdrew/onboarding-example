import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignupStackParamList } from '../../../../navigation/signup.stack';
import { render, fireEvent } from '../../../../../jest/test-utils';
import NameScreen from '../Name.screen';

describe('Name Screen', () => {
  describe('normal mode', () => {
    it('should display name text on screen', () => {
      const Stack = createNativeStackNavigator<SignupStackParamList>();

      const { getByText, getByPlaceholderText, queryByText } = render(
        <Stack.Navigator>
          <Stack.Screen name="Name" component={NameScreen} />
        </Stack.Navigator>,
      );

      expect(getByText(/what should we call you?/i)).toBeDefined();
      expect(getByPlaceholderText(/first name/i)).toBeDefined();
      expect(queryByText(/email address invalid/i)).toBeNull();
      expect(getByText(/continue/i)).not.toBeDisabled();
    });
  });

  describe('editing mode', () => {
    it('should display name text on screen', () => {
      const Stack = createNativeStackNavigator<SignupStackParamList>();

      const { getByText, getByPlaceholderText, queryByText } = render(
        <Stack.Navigator>
          <Stack.Screen
            name="Name"
            component={NameScreen}
            initialParams={{ edit: true }}
          />
        </Stack.Navigator>,
      );

      expect(getByText(/what should we call you?/i)).toBeDefined();
      expect(getByPlaceholderText(/first name/i)).toBeDefined();
      expect(queryByText(/email address invalid/i)).toBeNull();
      expect(getByText(/save/i)).not.toBeDisabled();
    });
  });

  describe('invalid form values', () => {
    describe('name field', () => {
      it('should not accept an invalid password', async () => {
        const Stack = createNativeStackNavigator<SignupStackParamList>();

        const { getByText, getByPlaceholderText, findByText } = render(
          <Stack.Navigator>
            <Stack.Screen name="Name" component={NameScreen} />
          </Stack.Navigator>,
        );

        fireEvent.changeText(getByPlaceholderText(/first name/i), '');

        expect(await findByText(/a name is required/i)).toBeDefined();
        expect(getByText(/continue/i)).toBeDisabled();
      });
    });
  });
});
