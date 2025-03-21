import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render Layout component', () => {
  render(<App />);
  const layout = screen.getByTestId('layout');
  expect(layout).toBeInTheDocument();
});
