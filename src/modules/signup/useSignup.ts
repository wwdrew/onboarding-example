import { useContext } from 'react';
import { useAuthentication } from '../../modules/authentication';
import {
  SignupContext,
  SignupContextValues,
  SignupState,
} from './signupContext';

interface UseSignupHook extends SignupContextValues {
  createUser: (userValues: SignupState) => void;
}

export const useSignup = (): UseSignupHook => {
  const { state, update } = useContext(SignupContext);
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
