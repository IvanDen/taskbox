import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const {container} = render(<App />);

	// expect(
	// 	container
	// 		.querySelector('.title-message')
	// ).not.toBe(null);

  const linkElement = screen.getByText(/Something went wrong/i);
  expect(linkElement).toBeInTheDocument();
});
