import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article/Article';

const ArticleList = ({ articles }) => {
  if(articles) {
    const articleDetails = articles.map((article, i) => (
      <>
        <li key={Date.now() + i}>
          <Article {...article}/>
        </li>
      </>
    ));
  
    return <ul>{articleDetails}</ul>;
  }
  return <ul>AAAAAAAAHHHHHHHHH</ul>;
}; 
  

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  )
};

export default ArticleList;
