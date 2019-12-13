import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AllergyManagementScreen from '../screens/AllergyManagementScreen'
import Profile from '../components/Profile'
import History from '../components/History'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    AllergyManagement: AllergyManagementScreen,
    Camera: CameraScreen,
    Profile: Profile,
    History: History,
  },
);
HomeStack.path = '';

export default HomeStack;


/*
const CameraStack = createStackNavigator(
  {
    Camera: CameraScreen,
  },
  config
);

CameraStack.navigationOptions = {
  tabBarLabel: 'Scan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-camera' : 'md-link'} />
  ),
};

CameraStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CameraStack,
  SettingsStack,
});

tabNavigator.path = '';
*/