import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewsSearch from '../containers/NewsSearch';
import Search from '../components/Search/Search';

describe('News Search container', () => {
  it('renders newsSearch', async () => {
    render(<NewsSearch />);

   
    const { queryByPlaceholderText } = render(<Search />);
    const searchInput = queryByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
