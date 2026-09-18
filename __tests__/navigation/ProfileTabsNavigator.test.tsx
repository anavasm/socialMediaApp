import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ProfileTabsNavigator, { TABS } from '../../navigation/ProfileTabsNavigator';

jest.mock('../../components/ProfileTabTitle', () => {
  const { Text } = require('react-native');
  return ({ title, isFocused }: { title: string; isFocused: boolean }) => (
    <Text testID={`tab-title-${title}`}>
      {title} - {isFocused ? 'Focused' : 'Unfocused'}
    </Text>
  );
});

jest.mock('../../components/ProfileTabContent', () => {
  const { View, Text } = require('react-native');
  return () => (
    <View testID="profile-tab-content">
      <Text>Tab Content Rendered</Text>
    </View>
  );
});

describe('ProfileTabsNavigator', () => {
  it('renders all profile tabs with correct titles and components', () => {
    render(<ProfileTabsNavigator />);

    expect(screen.getByTestId(`tab-title-${TABS.PHOTOS}`)).toBeVisible();
    expect(screen.getByTestId(`tab-title-${TABS.VIDEOS}`)).toBeVisible();
    expect(screen.getByTestId(`tab-title-${TABS.SAVED}`)).toBeVisible();

    const contents = screen.getAllByTestId('profile-tab-content');
    expect(contents).toHaveLength(3);
    expect(contents[0]).toBeVisible();
  });
});