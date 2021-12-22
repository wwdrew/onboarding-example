import { useContext } from 'react';
import { AuthenticationContext } from './authenticationContext';

interface UseAuthenticationHook {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export const useAuthentication = (): UseAuthenticationHook =>
  useContext(AuthenticationContext);

export default useAuthentication;
