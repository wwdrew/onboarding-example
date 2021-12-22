import React, { ReactNode, useReducer } from 'react';
import { initialState, SignupContext, SignupState } from './signupContext';

type ReducerAction<Action, Payload = undefined> = Payload extends undefined
  ? { type: Action }
  : { type: Action; payload: Payload };

type UpdateSignupAction = ReducerAction<'UPDATE', Partial<SignupState>>;

type SignupAction = UpdateSignupAction;

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
