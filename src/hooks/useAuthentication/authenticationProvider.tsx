import React, { createContext, ReactNode, useState } from 'react';

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

interface AuthenticatedProviderProps {
  children: ReactNode;
}

export const AuthenticationProvider = ({
  children,
}: AuthenticatedProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthenticationContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
