import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { render } from '@testing-library/react-native';
import UserProfileImage from '../../components/UserProfileImage';

describe('UserProfileImage', () => {
  const mockImageSource: ImageSourcePropType = {
    uri: 'https://example.com/avatar.jpg',
  };

  it('renders image correctly with default dimensions and accessibility role', () => {
    const { getByLabelText } = render(
      <UserProfileImage profileImage={mockImageSource} />
    );

    const image = getByLabelText(/user profile image/i);

    expect(image).toBeVisible();

    // Validates source prop and default dimensions style (65px)
    expect(image.props.source).toEqual(mockImageSource);
    expect(image.props.style).toEqual(
      expect.objectContaining({
        width: 65,
        height: 65,
      })
    );
  });

  it('applies custom dimensions to the image', () => {
    const customSize = 80;

    const { getByLabelText } = render(
      <UserProfileImage
        profileImage={mockImageSource}
        imageDimensions={customSize}
      />
    );

    const image = getByLabelText(/user profile image/i);

    // Truly verifies that custom dimensions are applied to style
    expect(image.props.style).toEqual(
      expect.objectContaining({
        width: customSize,
        height: customSize,
      })
    );
  });
});