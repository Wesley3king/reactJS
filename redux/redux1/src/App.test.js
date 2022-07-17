import React,{ render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/estudando redux/i);
  expect(linkElement).toBeInTheDocument();
});
