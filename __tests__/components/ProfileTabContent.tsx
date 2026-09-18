import React from 'react';
import { render } from '@testing-library/react-native';
import ProfileTabContent from '../../components/ProfileTabContent';

describe('ProfileTabContent', () => {
  it('renders the photo grid with 8 accessible images', () => {
    const { getByLabelText } = render(<ProfileTabContent />);

    for (let i = 1; i <= 8; i++) {
      expect(getByLabelText(`Grid photo ${i}`)).toBeVisible();
    }
  });
});