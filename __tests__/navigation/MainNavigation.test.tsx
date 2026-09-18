import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '../../navigation/MainNavigation';

describe('MainNavigation', () => {
  it('mounts drawer navigator and renders the initial HomeScreen route', async () => {
    render(
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    );

    const homeTitle = await screen.findByText(/let's explore/i);
    expect(homeTitle).toBeVisible();
  });
});