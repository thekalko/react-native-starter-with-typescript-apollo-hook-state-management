import createStateContext, {IAction} from './states';

const initialState: IAuthenticationState = {
  isAuthenticated: false,
};

const {useStateValue, StateProvider, StateContext} = createStateContext(
  authenticationReducer,
  initialState,
);

const DISPLAY_NAME = 'AuthenticationState';
const useAuthenticationState = useStateValue;
const AuthenticationState = StateProvider;

StateContext.displayName = DISPLAY_NAME;
AuthenticationState.displayName = DISPLAY_NAME;

export {useAuthenticationState, AuthenticationState};

//action
const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const setIsAuthenticated = (isAuthenticated: boolean): IAction => ({
  type: SET_AUTHENTICATED,
  payload: isAuthenticated,
});

//reducer
function authenticationReducer(
  state: IAuthenticationState,
  action: IAction,
): IAuthenticationState {
  if (action.type === SET_AUTHENTICATED) {
    return {
      ...state,
      isAuthenticated: action.payload,
    };
  }

  return state;
}

//state
export interface IAuthenticationState {
  isAuthenticated: boolean;
}
