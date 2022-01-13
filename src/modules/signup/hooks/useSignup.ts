import { useContext } from 'react';
import { useAuthentication } from '../../authentication';
import {
  SignupContext,
  SignupContextValues,
  SignupState,
} from '../context/signupContext';

interface UseSignupHook extends SignupContextValues {
  createUser: (userValues: SignupState) => void;
}

export const useSignup = (): UseSignupHook => {
  const context = useContext(SignupContext);

  if (!context) {
    throw new Error('useSignup must be used within an SignupProvider');
  }

  const { state, update } = context;
  const { setAuthenticated } = useAuthentication();

  const createUser = (userValues: SignupState) => {
    console.log('Create a user with these values:', { userValues });
    setAuthenticated(true);
  };

  return {
    createUser,
    state,
    update,
  };
};
