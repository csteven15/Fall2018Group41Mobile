import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const SignedInNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  }
});

console.log('hi');

export default SignedInNavigator;