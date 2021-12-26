import { useContext } from 'react';
import { AuthenticationContext } from './authenticationContext';

interface UseAuthenticationHook {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export const useAuthentication = (): UseAuthenticationHook => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      'useAuthentication must be used within an AuthenticationProvider',
    );
  }

  const { authenticated, setAuthenticated } = context;

  return {
    authenticated,
    setAuthenticated,
  };
};

export default useAuthentication;
