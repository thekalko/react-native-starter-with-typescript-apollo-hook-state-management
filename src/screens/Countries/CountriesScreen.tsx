import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AuthenticationGate from '../../components/authentication-gate/authentication-gate';
import {useAuthenticationState} from '../../states/authentication.state';
import {useCountries} from '../../hooks/queries/countries';
import {FlatList} from 'react-native-gesture-handler';
import {ICountry} from '../../states/counties.state';

export default () => {
  const [{isAuthenticated}] = useAuthenticationState();
  const [{countries}] = useCountries();

  return (
    <AuthenticationGate>
      <SafeAreaView>
        <Text>Countries</Text>
        <Text>isAuthenticated: {isAuthenticated ? 'true' : false}</Text>
        {countries && countries.length > 0 && (
          <FlatList<ICountry>
            data={countries}
            keyExtractor={(item, index) => index.toString()}
            renderItem={item => (
              <Text>
                {item.item.code} | {item.item.name}
              </Text>
            )}
          />
        )}
      </SafeAreaView>
    </AuthenticationGate>
  );
};
