// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
// import { createStore, combineReducers, applyMiddleware} from 'redux';
// import { Provider, connect } from 'react-redux';
// import config from './config';
// import Amplify from 'aws-amplify';
// import { AuthReducer } from './src/reducers';
// import { reducer as FormReducer } from 'redux-form';
// import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
// import thunk from 'redux-thunk';
// import HomeScreen from './src/screens/HomeScreen';
// import SignInScreen from './src/screens/SignInScreen';
// import OtherScreen from './src/screens/OtherScreen';
// import DrawerContent from './src/components/DrawerContent';
// import { Icon } from 'native-base';
// import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
// import PermitsScreen from './src/screens/PermitsScreen';
// import VehiclesScreen from './src/screens/VehiclesScreen';
// import ScannerScreen from './src/screens/ScannerScreen';
// import MapsScreen from './src/screens/MapsScreen';
// import ContactScreen from './src/screens/ContactScreen';
// import GuestScreen from './src/screens/GuestScreen';
// import CameraScreen from './src/screens/CameraScreen';

// Amplify.configure({
//   Auth: {
//     mandatorySignIn: false,
//     region: config.cognito.REGION,
//     userPoolId: config.cognito.USER_POOL_ID,
//     userPoolWebClientId: config.cognito.APP_CLIENT_ID
//   }
// });

// const AppNavigator = Actions.create(
//   <Scene key="root" hideNavBar>
//     <Scene key="signin" component={SignInScreen} hideNavBar />
//     <Scene key="guest" component={GuestScreen} hideNavBar />
//     <Scene key="camera" component={CameraScreen} />
//     <Drawer
//       hideNavBar
//       key="drawer"
//       onExit={() => {
//         console.log('Drawer closed');
//       }}
//       onEnter={() => {
//         console.log('Drawer opened');
//       }}
//       contentComponent={DrawerContent}
//       drawerIcon={<Icon name='menu' />}
//       drawerWidth={300}
//     >
//       <Scene key="home" component={HomeScreen} title='Home'/>
//       <Scene key="permits" component={PermitsScreen} title='Permits'/>
//       <Scene key="vehicles" component={VehiclesScreen} title='Vehicles'/>
//       <Scene key="scanner" component={ScannerScreen} title='Scanner'/>
//       <Scene key="maps" component={MapsScreen} title='Maps'/>
//       <Scene key="contact" component={ContactScreen} title='Contact'/>
//     </Drawer>
//   </Scene>,
// );
// // default nav reducer
// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('signin'));
// const navReducer = (state = initialState, action) => {
//   const nextState = AppNavigator.router.getStateForAction(action, state);
//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// };


// const rootReducer = combineReducers({
//   auth: AuthReducer,
//   form: FormReducer,
//   nav: navReducer
// });

// const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);
// const ReduxNavigator = reduxifyNavigator(AppNavigator, 'root');
// const mapStateToProps = state => ({
//   state: state.nav,
// });
// const ReduxRouter = connect(mapStateToProps)(Router);

// const store = createStore(rootReducer, applyMiddleware(thunk, reactNavigationReduxMiddleware));


// const App = (props) => {
//   return (
//     <Provider store={store}>
//       <ReduxRouter navigator={ReduxNavigator} />
//     </Provider>
//   );
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabBarStyle: {
//     backgroundColor: '#eee',
//   },
//   tabBarSelectedItemStyle: {
//     backgroundColor: '#ddd',
//   },
// });

// export default App;


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import Camera from 'react-native-openalpr';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: 100,
    right: 50,
    bottom: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    alignItems: 'center',
  },
  bottomOverlay: {
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default class AwesomeProject extends React.Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
      },
      plate: 'Scan a plate',
    };
  }

  onPlateRecognized = ({ plate, confidence }) => {
    if (confidence > 90) {
      this.setState({
        plate,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          hidden
        />
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureQuality={Camera.constants.CaptureQuality.medium}
          country="us"
          onPlateRecognized={this.onPlateRecognized}
          plateOutlineColor="#ff0000"
          showPlateOutline
          torchMode={Camera.constants.TorchMode.off}
          touchToFocus
        />
        <View style={[styles.overlay, styles.topOverlay]}>
        </View>
        <View style={[styles.overlay, styles.bottomOverlay]}>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.state.plate}</Text>
        </View>
      </View>

    );
  }
}
