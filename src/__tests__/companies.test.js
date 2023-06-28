import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Companies from '../components/companies';
import Button from '../components/Button';

test('renders the Companies component', () => {
  const { container } = render(
    <MemoryRouter>
      <Companies />
    </MemoryRouter>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders the Button component', () => {
  const props = {
    children: 'Test Button',
    url: '/test-url',
    iconName: 'test-icon',
  };
  const { container } = render(
    <MemoryRouter>
      <Button {...props} />
    </MemoryRouter>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
