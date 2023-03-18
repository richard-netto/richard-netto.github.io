import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i) as HTMLElement;
  expect(linkElement).toBeInTheDocument();
});

test('renders example-repo link', () => {
  render(<App />);
  const linkElement = screen.getByText(/example-repo/i) as HTMLElement;
  expect(linkElement).toBeInTheDocument();
});
