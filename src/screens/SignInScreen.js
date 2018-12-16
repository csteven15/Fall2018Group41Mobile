import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert } from 'react-native';
import SignInForm from '../components/SignInForm';
import userSignIn from '../actions/AuthActions';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    signIn: (values) => {
      dispatch(userSignIn(values));
      console.log('button pressed')
    }
  }
}

// const onSubmit = (values, dispatch) => {
//   dispatch(userSignIn(values.username, values.password));
// };

const SignInScreen = (props) => {
  const selector = formValueSelector('SignInForm');
  const values = selector(props, 'username', 'password');
  return (
    <SignInForm onSubmit={values => props.signIn(values)}/>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);