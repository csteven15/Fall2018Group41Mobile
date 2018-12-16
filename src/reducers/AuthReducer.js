import {
  USER_SIGNIN, USER_SIGNIN_ERROR, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_STARTED
} from './../constant-types';

const initialState = {
  authData: {},
  authState: 'guest',
  username: 'username',
  password: 'password',
  loading: false,
  error: null
};

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_SIGNIN_STARTED:
      return {
        ...state,
        loading: true
      };
    case USER_SIGNIN_SUCCESS:
      console.log('success')
      return {
        ...state,
        loading: false,
        error: null,
        username: action.payload.username,
        password: action.payload.password
      }
    case USER_SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state;
  }
};

export default AuthReducer;