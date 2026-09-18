import 'react-native-gesture-handler/jestSetup';

// Deshabilita react-native-screens para el entorno de pruebas
import { enableScreens } from 'react-native-screens';
enableScreens(false);

// Mock de Reanimated para evitar bloqueos en animaciones de Drawer
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock de SafeAreaContext
jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: ({ children }) => children,
    useSafeAreaInsets: () => inset,
    useSafeAreaFrame: () => ({ x: 0, y: 0, width: 390, height: 844 }),
  };
});

// Mock de Stack Navigator (necesario porque MainNavigation usa Stack.Navigator)
jest.mock('@react-navigation/stack', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    createStackNavigator: () => ({
      Navigator: ({ children }) => <View>{children}</View>,
      Screen: ({ component: Component, children }) =>
        Component ? <Component /> : <View>{children}</View>,
    }),
  };
});

// Mock de Drawer Navigator para renderizar sus pantallas directamente
jest.mock('@react-navigation/drawer', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    createDrawerNavigator: () => ({
      Navigator: ({ children }) => <View>{children}</View>,
      Screen: ({ component: Component, children }) =>
        Component ? <Component /> : <View>{children}</View>,
    }),
  };
});

// Mock de Material Top Tabs
jest.mock('@react-navigation/material-top-tabs', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    createMaterialTopTabNavigator: () => ({
      Navigator: ({ children }) => <View>{children}</View>,
      Screen: ({ options, component: Component }) => {
        const Label = options?.tabBarLabel;
        return (
          <View>
            {typeof Label === 'function' ? <Label focused={true} /> : null}
            {Component ? <Component /> : null}
          </View>
        );
      },
    }),
  };
});