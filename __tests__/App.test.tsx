import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders application container and initial navigation stack successfully', async () => {
    render(<App />);

    const titleElement = await screen.findByText(/let's explore/i);
    expect(titleElement).toBeVisible();

    const messagesButton = screen.getByLabelText(/messages with 2 unread notifications/i);
    expect(messagesButton).toBeVisible();
  });
});