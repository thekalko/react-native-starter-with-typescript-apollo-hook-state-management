import React, {PropsWithChildren} from 'react';
import LoginScreen from '../../screens/Login';
import {useAuthenticationState} from '../../states/authentication.state';

export default function AuthenticationGate({
  children,
}: PropsWithChildren<IAuthenticationGateProps>) {
  const [{isAuthenticated}] = useAuthenticationState();

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <LoginScreen />;
}

export interface IAuthenticationOptions {
  [index: string]: any;
}

export interface IAuthenticationGateProps {
  options?: IAuthenticationOptions;
}
