import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
console.disableYellowBox=true;

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  DrawerTab:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
