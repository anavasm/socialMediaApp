import React from 'react';
import { render } from '@testing-library/react-native';
import UserPost from '../../components/UserPost';
import { UserPostType } from '../../data/userPosts';

// Strongly typed mock props matching the component interface
const mockProps: UserPostType = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  location: 'New York',
  likes: 120,
  comments: 45,
  bookmarks: 23,
  image: { uri: 'https://example.com/post.jpg' },
  profileImage: { uri: 'https://example.com/avatar.jpg' },
};

describe('UserPost', () => {
  it('renders user information and main post image correctly', () => {
    const { getByText, getByLabelText } = render(<UserPost {...mockProps} />);

    expect(getByText(/john doe/i)).toBeVisible();
    expect(getByText(/new york/i)).toBeVisible();

    expect(getByLabelText(/post image by john doe/i)).toBeVisible();
  });

  it('renders post metrics with correct accessibility labels and counts', () => {
    const { getByLabelText } = render(<UserPost {...mockProps} />);

    expect(getByLabelText(/120 likes/i)).toBeVisible();
    expect(getByLabelText(/45 comments/i)).toBeVisible();
    expect(getByLabelText(/23 bookmarks/i)).toBeVisible();
  });
});