import React from 'react';
import { render } from '@testing-library/react';
import ISitem from '../components/ISitem';

test('renders the income statement item correctly', () => {
  const parameter = ['Revenue', 1000000];
  const index = 0;

  const { container } = render(<ISitem parameter={parameter} index={index} />);
  expect(container.firstChild).toMatchSnapshot();
});
