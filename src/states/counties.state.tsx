import createStateContext, {IAction} from './states';

export interface ICountry {
  code: string;
  name: string;
}

export const initialState: ICountryState = {
  countries: [],
};

const {useStateValue, StateProvider, StateContext} = createStateContext(
  countryReducer,
  initialState,
);

const DISPLAY_NAME = 'CountryState';
const useCountryState = useStateValue;
const CountryState = StateProvider;

StateContext.displayName = DISPLAY_NAME;
CountryState.displayName = DISPLAY_NAME;

export {useCountryState, CountryState};

//action
const SET_COUNTRIES = 'SET_COUNTRIES';
export const setCountries = (countries: ICountryState): IAction => {
  return {
    type: SET_COUNTRIES,
    payload: countries,
  };
};

//reducer
function countryReducer(state: ICountryState, action: IAction): ICountryState {
  if (action.type === SET_COUNTRIES) {
    return {
      ...state,
      countries: action.payload,
    };
  }

  return state;
}

//state
export interface ICountryState {
  countries: ICountry[];
}
