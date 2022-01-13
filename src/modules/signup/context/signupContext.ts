import { createContext } from 'react';

export type SignupState = {
  name: string;
  email: string;
  password: string;
};

export const initialState: SignupState = {
  name: '',
  email: '',
  password: '',
};

export type SignupContextValues = {
  state: SignupState;
  update: (values: Partial<SignupState>) => void;
};

export const SignupContext = createContext<SignupContextValues>({
  state: initialState,
  update: () => {},
});
