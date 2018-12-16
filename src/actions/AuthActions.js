import {
  USER_SIGNIN, USER_SIGNIN_ERROR, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_STARTED
} from './../constant-types/AuthActionTypes';
import Amplify, { Auth } from 'aws-amplify';

const userSignIn = (values) => {
  return async (dispatch, getState) => {
    dispatch(userSignInStarted());

    try {
      console.log('trying login');
      console.log(values);
      const data = await Auth.signIn(values.username, values.password)
      dispatch(userSignInSuccess(data));
      console.log('successfully logged in!');
      console.log(data);
    } catch (error) {
      dispatch(userSignInError(error));
      console.log(error);
      console.log('failed to log in!');
    }

    // Auth.signIn(username, password)
    //   .then((data) => {
    //     console.log(data);
    //     dispatch(userSignInSuccess(data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     dispatch(userSignInError(error));
    //   });

  }
};

const userSignInSuccess = data => ({
  type: USER_SIGNIN_SUCCESS,
  payload: {
    ...data
  }
});

const userSignInStarted = () => ({
  type: USER_SIGNIN_STARTED
});

const userSignInError = error => ({
  type: USER_SIGNIN_ERROR,
  payload: {
    error
  }
});

export default userSignIn;