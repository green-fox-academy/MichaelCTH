import React, { Component } from 'react';
import News from './News';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.API_KEY = 'apiKey=46c4cbcbb3a14713b8472ca99934b311';
    this.newsUrl = 'https://newsapi.org/v2/top-headlines?q=China&';
    this.delayUrl = 'http://slowwy.greenfox.academy/delay/3000/url/';
    this.state = { articles: [] };
  }

  componentDidMount() {
    const req = new Request(this.delayUrl + this.newsUrl + this.API_KEY);
    fetch(req)
      .then((response) => response.json())
      .then((response) => this.setState({ articles: response.articles }));
  }

  render() {
    const { articles } = this.state;
    console.log(articles);
    return articles.length > 0 ? (
      <div className="App">
        {articles.map((article) => (
          <News key={article.title} content={article} />
        ))}
      </div>
    ) : (
      <div className="App App-header">
        <h1>Loading</h1>
        <div className="lds-grid">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default App;
