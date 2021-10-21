import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NavItem from './NavItem';

const projectName = process.env.REACT_APP_PROJECT_NAME || '';

describe('NavItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MemoryRouter><NavItem link="AAA" text={projectName} active={false} /></MemoryRouter>);
    expect(baseElement).toBeTruthy();
  });
  it(`should have ${projectName} as the title`, () => {
    const { getAllByText } = render(<MemoryRouter><NavItem link="AAA" text={projectName} active /></MemoryRouter>);
    expect(getAllByText(projectName)).toBeTruthy();
  });
});
