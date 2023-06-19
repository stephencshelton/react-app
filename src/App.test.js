import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * This is a test component.
 * @component
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
