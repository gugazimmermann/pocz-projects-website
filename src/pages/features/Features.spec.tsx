import { render } from '@testing-library/react';

import Features from './Features';

describe('Features', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Features />);
    expect(baseElement).toBeTruthy();
  });
  it('should have Seu Escritório Virtual as the title', () => {
    const { getAllByText } = render(<Features />);
    expect(getAllByText('Seu Escritório Virtual')).toBeTruthy();
  });
});
