import { useContext } from 'react';
import { AuthenticationContext } from './authenticationProvider';

interface UseAuthenticationHook {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export const useAuthentication = (): UseAuthenticationHook =>
  useContext(AuthenticationContext);

export { AuthenticationProvider } from './authenticationProvider';

export default useAuthentication;
