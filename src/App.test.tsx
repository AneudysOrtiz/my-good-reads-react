import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  expect(getByText(/my good reads/i)).toBeInTheDocument();
  expect(getByText(/wish list/i)).toBeInTheDocument();
});
