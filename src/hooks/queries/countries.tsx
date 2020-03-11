import {useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  useCountryState,
  setCountries,
  ICountryState,
  initialState,
} from '../../states/counties.state';
import {useAuthenticationState} from '../../states/authentication.state';

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
    }
  }
`;

export const useCountries = () => {
  const [{countries}, dispath] = useCountryState();
  const [{isAuthenticated}] = useAuthenticationState();
  const {loading, data} = useQuery<ICountryState>(GET_COUNTRIES, {
    variables: {},
  });

  useEffect(() => {
    if (!loading && isAuthenticated) {
      return dispath(setCountries(data || initialState));
    }
  }, [data, dispath, isAuthenticated, loading]);

  return [countries, loading];
};
