import React from 'react';
import ApolloClient from './config/ApolloClient';
import {ApolloProvider} from '@apollo/react-hooks';
import SlackNavigation from './navigation';
import {AuthenticationState} from './states/authentication.state';
import {CountryState} from './states/counties.state';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <ApolloProvider client={ApolloClient}>
      <AuthenticationState>
        <CountryState>
          <SlackNavigation />
        </CountryState>
      </AuthenticationState>
    </ApolloProvider>
  );
};

export default App;
