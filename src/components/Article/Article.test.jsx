import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('Article Component', () => {
  it('renders article', () => {
    const { asFragment } = render(
      <Article
        title="Race to the Outhouse"
        author="Will E. Makeit"
        description="a sad tale as old as time"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
