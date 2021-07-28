import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Search from '../components/Search/Search';
import { fetchArticles, fetchBySearch } from '../services/newsApi';


export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: true,
      search: 'dog',
    };

    async componentDidMount() {
      const articles = await fetchArticles();
      console.log(articles);
      this.setState({ articles, loading: false });
    }

    handleChange(e) {
      this.setState({ search: e.target.value });
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
