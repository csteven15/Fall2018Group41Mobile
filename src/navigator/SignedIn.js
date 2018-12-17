import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const SignedInNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: 'Home'
    }
  }
});

export default SignedInNavigator;