import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import App from './App';

test('renders renders app title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Flix App/i);
  expect(title).toBeInTheDocument();
});

test('renders list of movies', async () => {
  const { getAllByTestId } = render(<App />);
  await waitForDomChange();
  expect(getAllByTestId('title').length).toBe(5);
});
