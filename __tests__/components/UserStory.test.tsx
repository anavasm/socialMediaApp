import React from 'react';
import { render } from '@testing-library/react-native';
import UserStory from '../../components/UserStory';
import { UserStoryType } from '../../data/userStories';

// Strongly typed mock props matching UserStoryType interface
const mockProps: UserStoryType = {
  id: 1,
  firstName: 'John',
  profileImage: { uri: 'https://example.com/avatar.jpg' },
};

describe('UserStory', () => {
  it('renders user story with first name and profile image accessibly', () => {
    const { getByText, getByRole, getByLabelText } = render(<UserStory {...mockProps} />);

    expect(getByText(/john/i)).toBeVisible();

    expect(getByLabelText(/user story for john/i)).toBeVisible();

    expect(getByLabelText(/profile picture of john/i)).toBeVisible();
  });
});