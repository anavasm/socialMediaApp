import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import HomeScreen from '../screens/Home/HomeScreen';

export type RootStackParamList = {
  [Routes.Home]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Routes.Home}
    >
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
