import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/login';
import Signup from './screens/signup'

const stackNavigator = createStackNavigator({

  Login : Login,
  Signup: Signup,
  Home: HomeScreen

 
});

const App = createAppContainer(stackNavigator);

export default App;
