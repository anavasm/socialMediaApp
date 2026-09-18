import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../../screens/Home/HomeScreen';
import { USER_STORIES } from '../../data/userStories';
import { USER_POSTS } from '../../data/userPosts';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => 'FontAwesomeIcon',
}));


const mockNavigation: any = {
  navigate: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
};

const mockRoute: any = {
  key: 'HomeScreen-key',
  name: 'Home',
};

describe('HomeScreen', () => {
  it('renders initial static elements and initial page data', () => {
    render(<HomeScreen navigation={mockNavigation} route={mockRoute} />);


    expect(screen.getByText("Let's Explore")).toBeVisible();
    expect(
      screen.getByLabelText('Messages with 2 unread notifications'),
    ).toBeVisible();


    const initialStories = USER_STORIES.slice(0, 4);
    initialStories.forEach(story => {
      expect(screen.getByText(story.firstName)).toBeVisible();
    });

    const initialPosts = USER_POSTS.slice(0, 2);
    initialPosts.forEach(post => {
      expect(
        screen.getByLabelText(`Post by ${post.firstName} ${post.lastName}`),
      ).toBeVisible();
    });
  });

  it('paginates user stories on horizontal scroll end reached', () => {
    render(<HomeScreen navigation={mockNavigation} route={mockRoute} />);

    const scrollViews = screen.UNSAFE_getAllByType('RCTScrollView' as any);
    const storiesFlatList = scrollViews[1];

    fireEvent(storiesFlatList, 'onEndReached');

    const nextPageStories = USER_STORIES.slice(4, 8);
    nextPageStories.forEach(story => {
      expect(screen.getByText(story.firstName)).toBeVisible();
    });
  });

  it('paginates user posts on vertical scroll end reached', () => {
    render(<HomeScreen navigation={mockNavigation} route={mockRoute} />);

    const postsList = screen.getByLabelText('Posts feed');

    fireEvent(postsList, 'onEndReached');

    const nextPagePosts = USER_POSTS.slice(2, 4);
    nextPagePosts.forEach(post => {
      expect(
        screen.getByLabelText(`Post by ${post.firstName} ${post.lastName}`),
      ).toBeVisible();
    });
  });
});