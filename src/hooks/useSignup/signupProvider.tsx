import React, { createContext, ReactNode, useReducer } from 'react';

type ReducerAction<Action, Payload = undefined> = Payload extends undefined
  ? { type: Action }
  : { type: Action; payload: Payload };

type UpdateSignupAction = ReducerAction<'UPDATE', Partial<SignupState>>;

type SignupAction = UpdateSignupAction;

export type SignupState = {
  name: string;
  email: string;
  password: string;
};

export type SignupContextValues = {
  state: SignupState;
  update: (values: Partial<SignupState>) => void;
};

const initialState: SignupState = {
  name: '',
  email: '',
  password: '',
};

export const SignupContext = createContext<SignupContextValues>({
  state: initialState,
  update: () => {},
});

interface SignupProviderProps {
  children: ReactNode;
}

const signupReducer = (
  state: SignupState,
  action: SignupAction,
): SignupState => {
  switch (action.type) {
    case 'UPDATE': {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
};

export const SignupProvider = ({ children }: SignupProviderProps) => {
  const [state, dispatch] = useReducer(signupReducer, initialState);

  const update = (values: Partial<SignupState>) =>
    dispatch({ type: 'UPDATE', payload: values });

  return (
    <SignupContext.Provider value={{ state, update }}>
      {children}
    </SignupContext.Provider>
  );
};
