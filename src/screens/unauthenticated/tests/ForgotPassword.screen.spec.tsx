import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from '../../../../jest/test-utils';

import ForgotPasswordScreen from '../ForgotPassword.screen';
import { UnauthenticatedStackParamList } from '../../../navigation/unauthenticated.stack';

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

  // it('should navigate to forgotten password screen', () => {
  //   const Stack = createNativeStackNavigator();

  //   const { getByText } = render(
  //     <Stack.Navigator>
  //       <Stack.Screen name="Login" component={LoginScreen} />
  //       <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  //     </Stack.Navigator>,
  //   );

  //   fireEvent.press(getByText(/forgotten your password/i));

  //   expect(getByText(/forgot Your password?/i)).toBeDefined();
  // });

  // it('should navigate to login screen', () => {
  //   const Stack = createNativeStackNavigator();

  //   const { getByText } = render(
  //     <Stack.Navigator>
  //       <Stack.Screen name="Welcome" component={WelcomeScreen} />
  //       <Stack.Screen name="Login" component={LoginScreen} />
  //     </Stack.Navigator>,
  //   );

  //   fireEvent.press(getByText(/sign in/i));

  //   expect(getByText(/login/i)).toBeDefined();
  // });
});
