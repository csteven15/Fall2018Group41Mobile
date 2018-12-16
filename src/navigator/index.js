import { createSwitchNavigator } from 'react-navigation';

import SignedInNavigator from './SignedIn';
import SignedOutNavigator from './SignedOut';



export const GetRootNavigator = (loggedIn) => {
  console.log(loggedIn)
  createSwitchNavigator(
    {
      LoggedOut: {
        screen: SignedOutNavigator
      },
      LoggedIn: {
        screen: SignedInNavigator
      }
    },
    {
      initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut'
    }
  );
};