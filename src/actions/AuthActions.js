import {
  USER_SIGNIN, USER_SIGNIN_ERROR, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_STARTED
} from './../constant-types/AuthActionTypes';
import { Auth } from 'aws-amplify';

const userSignIn = (values) => {
  return async (dispatch, getState) => {
    dispatch(userSignInStarted());

    console.log('getting current state before dispatch');
    console.log(getState());

    try {
      console.log('trying login');
      console.log(values);
      let data = await Auth.signIn(values.username, values.password);
      console.log('successfully connected with amplify');
      dispatch(userSignInSuccess(data));
      console.log('successfully logged in with data:');
      console.log(data);
    } catch (error) {
      dispatch(userSignInError(error));
      console.log('failed to log in with error:');
      console.log(error);
    }

    console.log('getting state after dispatch');
    console.log(getState());

  }

  // then catch
  // return (dispatch, getState) => {
  //   dispatch(userSignInStarted());
  //   console.log('start authentication')
  //   Auth.signIn(values.username, values.password)
  //     .then((response) => {
  //       if (response.code === "UserNotFoundException") {
  //         dispatch(userSignInError(response));
  //         console.log('error!!!!!')
  //         console.log(response);
  //       }
  //       return response;
  //     })
  //     .then((response) => {
  //       dispatch(userSignInSuccess(response));
  //       console.log('success!!!!')
  //       console.log(response);
  //     })
  //     .catch((response) => {
  //       dispatch(userSignInError(response));
  //       console.log('error!!!!!')
  //       console.log(response);
  //     });

  //   console.log('getting state after dispatch');
  //   console.log(getState());
  // }

};

const userSignInSuccess = data => ({
  type: USER_SIGNIN_SUCCESS,
  payload: {
    username: data.signInUserSession.accessToken.payload.username,
    jwtToken: data.signInUserSession.accessToken.jwToken,
    authData: data
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