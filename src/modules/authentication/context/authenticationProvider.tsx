import React, { ReactNode, useState } from 'react';
import { AuthenticationContext } from './authenticationContext';

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
