import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SignInScreen from './screens/SignInScreen';
import { GetRootNavigator } from './navigator';




const Root = (props) => {
  let loggedIn = false;
  console.log('hi')
  const RootNavigator = GetRootNavigator(loggedIn);
  return <SignInScreen />
  
}

export default Root;