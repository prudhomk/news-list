import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Search from '../Search/Search';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders search', async () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
