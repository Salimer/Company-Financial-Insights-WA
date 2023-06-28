import React from 'react';
import { render } from '@testing-library/react';
import LoadingScreen from '../components/loadingScreen';

describe('LoadingScreen', () => {
  test('renders correctly', () => {
    const { container } = render(<LoadingScreen />);
    expect(container).toMatchSnapshot();
  });
});
