import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuthenticationState} from '../../states/authentication.state';
export default () => {
  const navigation = useNavigation();
  const [{isAuthenticated}] = useAuthenticationState();

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>Authed: {isAuthenticated ? 'true' : 'false'}</Text>
      <Button
        title="Countries"
        onPress={() => navigation.navigate('Countries')}
      />
    </SafeAreaView>
  );
};
