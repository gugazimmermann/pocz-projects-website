/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import ModuleItem from './ModuleItem';

describe('ProductDetailsItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ModuleItem title="AAA" subTitle="BBB" text="CCC" link="/" />,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have CCC text', () => {
    const { getAllByText } = render(
      <ModuleItem title="AAA" subTitle="BBB" text="CCC" link="/" />,
    );
    expect(getAllByText('CCC')).toBeTruthy();
  });

  it('should call window.location on click', async () => {
    const originalLocation = window.location;
    // @ts-expect-error
    delete window.location;
    // @ts-expect-error
    window.location = Object.assign(new URL('http://test.com'), {
      ancestorOrigins: '',
      assign: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn(),
    });
    render(<ModuleItem title="AAA" subTitle="BBB" text="CCC" link="/DDD" />);
    const btn = screen.getByText('Testar');
    await waitFor(() => fireEvent.click(btn));
    await waitFor(() => expect(window.location.assign).toHaveBeenCalledWith('/DDD'));
    window.location = originalLocation;
  });
});
