import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

// const projectName = process.env.REACT_APP_PROJECT_NAME || '';

test('renders learn react link', () => {
  const { getAllByText } = render(<MemoryRouter><App /></MemoryRouter>);
  expect(getAllByText('Carregando...')).toBeTruthy();
});
