import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SignInForm from '../components/SignInForm';
import userSignIn from '../actions/AuthActions';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (values) => dispatch(userSignIn(values))
  }
}

const SignInScreen = (props) => {
  const selector = formValueSelector('SignInForm');
  const values = selector(props, 'username', 'password');
  console.log(props);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignInForm onSubmit={values => props.signIn(values)}/>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);