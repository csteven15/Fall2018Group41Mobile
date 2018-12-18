import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider, connect } from 'react-redux';
import config from './config';
import Amplify from 'aws-amplify';
import { AuthReducer } from './src/reducers';
import { reducer as FormReducer } from 'redux-form';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import OtherScreen from './src/screens/OtherScreen';
import DrawerContent from './src/components/DrawerContent';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import { Menu as MenuIcon } from 'react-native-vector-icons/FontAwesome5';
import PermitsScreen from './src/screens/PermitsScreen';
import VehiclesScreen from './src/screens/VehiclesScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import MapsScreen from './src/screens/MapsScreen';
import ContactScreen from './src/screens/ContactScreen';


Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

const AppNavigator = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="signin" component={SignInScreen} hideNavBar />
    <Drawer
      hideNavBar
      key="drawer"
      onExit={() => {
        console.log('Drawer closed');
      }}
      onEnter={() => {
        console.log('Drawer opened');
      }}
      contentComponent={DrawerContent}
      drawerIcon={MenuIcon}
      drawerWidth={300}
    >
      <Scene key="home" component={HomeScreen} />
      <Scene key="permits" component={PermitsScreen} />
      <Scene key="vehicles" component={VehiclesScreen} />
      <Scene key="scanner" component={ScannerScreen} />
      <Scene key="maps" component={MapsScreen} />
      <Scene key="contact" component={ContactScreen} />
    </Drawer>
  </Scene>,
);
// default nav reducer
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('signin'));
const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};


const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  nav: navReducer
});

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);
const ReduxNavigator = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const ReduxRouter = connect(mapStateToProps)(Router);

const store = createStore(rootReducer, applyMiddleware(thunk, reactNavigationReduxMiddleware));


const App = (props) => {
  return (
    <Provider store={store}>
      <ReduxRouter navigator={ReduxNavigator} />
    </Provider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

export default App;