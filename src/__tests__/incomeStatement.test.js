import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import IncomeStatement from '../components/incomeStatement';

test('renders the income statement correctly', () => {
  const company = [
    // Mock company data
    {
      date: '2023-01-01',
      reportedCurrency: 'USD',
      revenue: 1000000,
      costOfRevenue: 800000,
      grossProfit: 200000,
    },
  ];

  const { container } = render(
  <MemoryRouter>
    <IncomeStatement company={company} />
  </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
