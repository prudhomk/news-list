import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ text, onChange }) => (
  <>
    <label htmlFor="search">Search Articles</label>
    <input
      id="search"
      type="search"
      name="search"
      value={text}
      onChange={onChange}
    />
  </>
);

Search.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;

