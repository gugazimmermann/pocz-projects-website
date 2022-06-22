import { render } from '@testing-library/react';

import Products from './Products';

describe('ProductMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Products />);
    expect(baseElement).toBeTruthy();
  });

  it('should have Seu Escritório Virtual text', () => {
    const { getAllByText } = render(<Products />);
    expect(getAllByText('Seu Escritório Virtual')).toBeTruthy();
  });
});
