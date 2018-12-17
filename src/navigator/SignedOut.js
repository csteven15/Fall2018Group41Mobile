import { createStackNavigator } from 'react-navigation'

import SignInScreen from '../screens/SignInScreen';

const SignedOutNavigator = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default SignedOutNavigator;