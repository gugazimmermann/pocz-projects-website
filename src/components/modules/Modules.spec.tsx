import { render } from '@testing-library/react';

import Modules from './Modules';

describe('Modules', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Modules />);
    expect(baseElement).toBeTruthy();
  });

  it('should have Módulos text', () => {
    const { getAllByText } = render(<Modules />);
    expect(getAllByText('Módulos')).toBeTruthy();
  });
});
