import { useContext } from 'react';
import {
  SignupContext,
  SignupContextValues,
  SignupState,
} from './signupProvider';

interface UseSignupHook extends SignupContextValues {
  createUser: (userValues: SignupState) => void;
}

const useSignup = (): UseSignupHook => {
  const { state, update } = useContext(SignupContext);

  const createUser = (userValues: SignupState) => {
    console.log('Create a user with these values:', { userValues });
  };

  return {
    createUser,
    state,
    update,
  };
};

export { SignupProvider } from './signupProvider';

export default useSignup;
