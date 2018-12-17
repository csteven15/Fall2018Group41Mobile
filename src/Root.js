import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView} from 'react-native';
import SignInScreen from './screens/SignInScreen';
import GetRootNavigator from './navigator/GetRootNavigator';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';


const mapStateToProps = state => {
  return {
    authData: state.auth.authData,
    authState: state.auth.authState,
    username: state.auth.username,
    loggedIn: state.auth.loggedIn
  };
};



const Root = (props) => {
  console.log(props.loggedIn);
  const RootNavigator = GetRootNavigator(props.loggedIn);
  const AppContainer = createAppContainer(RootNavigator);
  return <AppContainer />  
}

export default connect(mapStateToProps)(Root);