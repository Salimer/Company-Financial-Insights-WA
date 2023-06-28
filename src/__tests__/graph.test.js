import React from 'react';
import { render } from '@testing-library/react';
import Graph from '../components/graph';

test('renders the graph correctly', () => {
  const company = [
    { date: '2021-01-01', revenue: 1000000 },
    { date: '2022-01-01', revenue: 1500000 },
    { date: '2023-01-01', revenue: 2000000 },
  ];

  const { container } = render(<Graph company={company} />);
  expect(container.firstChild).toMatchSnapshot();
});
