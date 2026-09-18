import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ProfileScreen from '../../screens/Profile/ProfileScreen';


jest.mock('../../navigation/ProfileTabsNavigator', () => {
  const { View, Text } = require('react-native');
  return () => (
    <View testID="profile-tabs-navigator">
      <Text>Profile Tabs Content</Text>
    </View>
  );
});


const mockNavigation: any = {
  navigate: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  openDrawer: jest.fn(),
  closeDrawer: jest.fn(),
};

const mockRoute: any = {
  key: 'ProfileScreen-key',
  name: 'Profile',
};

describe('ProfileScreen', () => {
  it('renders user info, statistics, and profile tabs correctly', () => {
    render(<ProfileScreen navigation={mockNavigation} route={mockRoute} />);

    // 1. Nombre de usuario
    expect(screen.getByText('Emmanuel Robertsen')).toBeVisible();

    // 2. Estadísticas de usuario
    expect(screen.getByText('45')).toBeVisible();
    expect(screen.getByText('Following')).toBeVisible();

    expect(screen.getByText('30M')).toBeVisible();
    expect(screen.getByText('Followers')).toBeVisible();

    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('Posts')).toBeVisible();

    // 3. Renderizado del navegador de pestañas (ProfileTabsNavigator)
    expect(screen.getByTestId('profile-tabs-navigator')).toBeVisible();
    expect(screen.getByText('Profile Tabs Content')).toBeVisible();
  });
});