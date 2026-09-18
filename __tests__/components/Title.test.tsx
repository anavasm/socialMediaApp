import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import Title from '../../components/Title';

describe('Title', () => {
  it('renders correctly and is accessible as a header', () => {
    const { getByRole } = render(<Title>Hello World</Title>);

    const header = getByRole('header', { name: /hello world/i });
    expect(header).toBeVisible();
  });

  it('fallback accessibilityLabel is used when children is not a string', () => {
    // Render component passing JSX node as children
    const { getByLabelText } = render(
      <Title>
        <Text>Complex Title</Text>
      </Title>
    );

    const header = getByLabelText(/title/i);
    expect(header).toBeVisible();
  });
});