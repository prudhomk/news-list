import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ text, onChange, onSearch }) => (
  <form>
    <label htmlFor="search">Search Articles</label>
    <input
      id="search"
      type="search"
      name="search"
      value={text}
      onChange={onChange}
      onSearch={onSearch}
    />
    <button>Search</button>
  </form>
);

Search.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;

