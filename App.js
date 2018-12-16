import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import config from './config';
import Amplify from 'aws-amplify';
import Root from './src/Root';

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});



const App = (props) => {
  console.log('hi app')
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
  
}

export default App;