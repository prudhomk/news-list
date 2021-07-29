import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <li>
    <p>{title}</p>
    <p>{author}</p>
    <p>{description}</p>
  </li>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequried,
};

export default Article;
