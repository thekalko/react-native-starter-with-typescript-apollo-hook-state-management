import React from 'react';
import {Button, Text, SafeAreaView} from 'react-native';
import {
  useAuthenticationState,
  setIsAuthenticated,
} from '../../states/authentication.state';

export default () => {
  const [{isAuthenticated}, dispath] = useAuthenticationState();

  return (
    <SafeAreaView>
      <Text>Screen Login</Text>
      <Text>Press to login</Text>
      <Button
        onPress={() => dispath(setIsAuthenticated(true))}
        title="do login..."
      />
    </SafeAreaView>
  );
};
