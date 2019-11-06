import React, { useState } from 'react';
import News from './News';
import CountryInput from './CountryInput';
import Loading from './Loading';
import './App.css';

const API_KEY = '&apiKey=46c4cbcbb3a14713b8472ca99934b311';
const newsUrl = 'https://newsapi.org/v2/top-headlines?category=technology&pageSize=10&country=';

function fetchNews(code, setArticle, setLoader) {
  setLoader(true);
  const req = new Request(newsUrl + code + API_KEY);
  fetch(req)
    .then((response) => response.json())
    .then((response) => {
      setArticle(response.articles);
      setLoader(false);
    });
}

export default function App() {
  const [articles, setArticle] = useState([]);
  const [loader, setLoader] = useState(false);
  return (
    <div className="App">
      <CountryInput onClick={(code) => fetchNews(code, setArticle, setLoader)} />
      {loader ? <Loading /> : <p />}
      {articles.map((article) => (
        <News key={article.title} content={article} />
      ))}
    </div>
  );
}
