import { render, screen } from '@testing-library/react';
import Loading from './Loading';

test('renders learn react link', () => {
  render(<Loading />);
  const linkElement = screen.getByText(/Carregando/i);
  expect(linkElement).toBeInTheDocument();
});
