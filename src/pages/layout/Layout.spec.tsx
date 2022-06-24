import { fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Layout from './Layout';
import Main from '../main/Main';

describe('Layout', () => {
  it('should have Nav Menu', () => {
    const { findByRole } = render(
      <MemoryRouter>
        <Layout>
          <Main />
        </Layout>
      </MemoryRouter>,
    );
    expect(findByRole('nav')).toBeTruthy();
  });

  it('should scroll and change menu color', async () => {
    const { findByRole } = render(
      <MemoryRouter>
        <Layout>
          <Main />
        </Layout>
      </MemoryRouter>,
    );
    await waitFor(() => fireEvent.scroll(window, { target: { scrollY: 500 } }));
    expect(findByRole('nav')).toBeTruthy();
  });

  it('should have Footer', () => {
    const { findByRole } = render(
      <MemoryRouter>
        <Layout>
          <Main />
        </Layout>
      </MemoryRouter>,
    );
    expect(findByRole('footer')).toBeTruthy();
  });
});
