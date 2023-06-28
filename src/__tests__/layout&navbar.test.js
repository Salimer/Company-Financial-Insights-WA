import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Navbar from '../components/navbar';

describe('Layout', () => {
  test('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

describe('Navbar', () => {
  test('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
