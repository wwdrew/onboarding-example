import { useContext } from 'react';
import { SignupContext, SignupContextValues } from './signupProvider';

interface SignupContextStuff extends SignupContextValues {}

const useSignup = (): SignupContextStuff => {
  const { state, update } = useContext(SignupContext);

  return {
    state,
    update,
  };
};

export { SignupProvider } from './signupProvider';

export default useSignup;
