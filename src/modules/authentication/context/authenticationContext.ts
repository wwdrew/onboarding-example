import { createContext } from 'react';

export type AuthenticationContextValues = {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
};

export const AuthenticationContext = createContext<AuthenticationContextValues>(
  {
    authenticated: false,
    setAuthenticated: () => undefined,
  },
);
