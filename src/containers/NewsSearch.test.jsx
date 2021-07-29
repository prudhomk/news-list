import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewsSearch from '../containers/NewsSearch';

describe('News Search container', () => {
  it('renders newsSearch', async () => {
    render(<NewsSearch />);

   
    const Search = screen.getByPlaceholderText('Search');
    fireEvent.change(Search, { target: { value: 'dog' } });
    expect().toHaveTextContent('dog');
  });
});
