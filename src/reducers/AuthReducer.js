import {
  USER_SIGNIN, USER_SIGNIN_ERROR, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_STARTED
} from './../constant-types/AuthActionTypes';

const initialState = {
  authData: null,
  authState: 'guest',
  loggedIn: false,
  email: null,
  jwtToken: null,
  username: null,
  error: null
};

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_SIGNIN_STARTED:
      console.log('user sign in started reducer')
      return {
        ...state,
        loading: true
      };
    case USER_SIGNIN_SUCCESS:
      console.log('success from reducer');
      console.log(action);
      return {
        ...state,
        loggedIn: true,
        loading: false,
        error: null,
        authState: action.payload.username,
        authData: action.payload.authData,
        username: action.payload.username,
        jwtToken: action.payload.jwtToken,
        email: action.payload.email
      }
    case USER_SIGNIN_ERROR:
      console.log('failure from reducer');
      console.log(action);
      return {
        ...state,
        username: null,
        loading: false,
        error: action.payload.error
      }
    default:
      return state;
  }
};

export default AuthReducer;