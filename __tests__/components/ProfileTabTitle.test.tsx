import React from 'react';
import { render } from '@testing-library/react-native';
import ProfileTabTitle from '../../components/ProfileTabTitle';

describe('ProfileTabTitle', () => {
  it('renders tab title correctly when unfocused', () => {
    const { getByRole } = render(
      <ProfileTabTitle title="Photos" isFocused={false} />
    );

    const tab = getByRole('tab', { name: /photos/i, selected: false });

    expect(tab).toBeVisible();
    expect(tab.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: '#79869F' }),
      ])
    );
  });

  it('renders tab title correctly with focused styles when active', () => {
    const { getByRole } = render(
      <ProfileTabTitle title="Photos" isFocused={true} />
    );

    const tab = getByRole('tab', { name: /photos/i, selected: true });

    expect(tab).toBeVisible();
    expect(tab.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: '#022150' }),
      ])
    );
  });
});