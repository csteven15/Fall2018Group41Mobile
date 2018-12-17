import { createSwitchNavigator } from 'react-navigation';

import SignedInNavigator from './SignedIn';
import SignedOutNavigator from './SignedOut';

const GetRootNavigator = (loggedIn) => {
  console.log('logging loggedIn variable')
  console.log(loggedIn);
  return createSwitchNavigator(
    {
      LoggedOut: {
        screen: SignedOutNavigator,

      },
      LoggedIn: {
        screen: SignedInNavigator,
      }
    },
    {
      initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut'
    }
  );
};

export default GetRootNavigator;