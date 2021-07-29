import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ArticleList from '../ArticleList/ArticleList';

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('renders articlelist', async () => {
    const { asFragment } = render(<ArticleList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
