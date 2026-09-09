import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from './routes';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

export type RootStackParamList = {
  [Routes.Drawer]: undefined;
  [Routes.Home]: undefined;
  [Routes.Profile]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes.Home}
    >
      <Drawer.Screen name={Routes.Home} component={HomeScreen} />
      <Drawer.Screen name={Routes.Profile} component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes.Drawer}
    >
      <Stack.Screen name={Routes.Drawer} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;