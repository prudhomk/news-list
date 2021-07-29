import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Search from '../components/Search/Search';
import { fetchArticles, fetchBySearch } from '../services/newsApi';


export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: true,
      search: '',
    };

    async componentDidMount() {
      const articles = await fetchArticles();
      this.setState({ articles, loading: false });
    }

    handleChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({ loading: true });
      const searchArticles = await fetchBySearch(this.state.search);
      this.setState({ articles: searchArticles, loading: false });
      
    }
 
    render() {
      const { articles, loading, search } = this.state;

      if(loading) return <h1>Loading...</h1>;
      
      return (
        <>
        
          <Search
            search={search}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />

          <ArticleList articles={articles} />;
        </>
      );    
    }
}
