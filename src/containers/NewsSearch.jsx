import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Search from '../components/Search/Search';
import { fetchArticles, fetchBySearch } from '../services/newsApi';


export default class NewsSearch extends Component {
    state = {
      articles: [],
      searchArticles: [],
      loading: true,
      search: 'dog',
    };

    async componentDidMount() {
      const articles = await fetchArticles();
      this.setState({ articles, loading: false });
    }

    async handleSearch({ search }) {
      const searchArticles = await fetchBySearch(search);
      this.setState({ search, searchArticles });
    }

    handleSubmit = (e) => {
      e.prevent.Default();
      this.handleSearch(this.state);
    }
 
    render() {
      const { articles, searchArticles, loading, search } = this.state;

      if(loading) return <h1>Loading...</h1>;
    //   if(search !== null) return <ArticleList articles={searchArticles}/>;
      return (
        <>
        
          <Search
            search={search}
            onChange={this.handleSubmit}
            onSearch={this.handleSearch}
          />

          <ArticleList articles={articles} />;
        </>
      );    
    }
}
