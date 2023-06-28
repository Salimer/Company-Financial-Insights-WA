import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from '../components/Button';

describe('Button component', () => {
  it('renders the button correctly', () => {
    const props = {
      children: 'Test Button',
      url: 'test-url',
      iconName: 'test-icon',
    };
    const { container } = render(
      <MemoryRouter>
        <Button url={props.url} iconName={props.iconName}>
          Test Button
        </Button>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
