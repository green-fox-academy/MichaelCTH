import React, { Component } from 'react';
import News from './News';
import CountryInput from './CountryInput';
import Loading from './Loading';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.API_KEY = '&apiKey=46c4cbcbb3a14713b8472ca99934b311';
    this.newsUrl = 'https://newsapi.org/v2/top-headlines?category=technology&pageSize=10&country=';
    this.state = { articles: [], country: null, loader: false };
  }

  updateCountry(code) {
    this.setState({ articles: [], country: code, loader: true }, this.fetchNews);
  }

  fetchNews() {
    const { country } = this.state;
    const req = new Request(this.newsUrl + country + this.API_KEY);
    fetch(req)
      .then((response) => response.json())
      .then((response) => this.setState({ articles: response.articles, loader: false }));
  }

  render() {
    const { articles, loader } = this.state;
    return (
      <div className="App">
        <CountryInput onClick={(code) => this.updateCountry(code)} />
        {loader ? <Loading /> : <p />}
        {articles.map((article) => (
          <News key={article.title} content={article} />
        ))}
      </div>
    );
  }
}

export default App;
