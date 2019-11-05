import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

function Home() {
  return <h1>Hello World!</h1>;
}

function ErrorPage({ match }) {
  const errorCode = match.params.errorcode;
  return <h1>{errorCode ? `Error: <${errorCode}>` : 'Something bad happened.'}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/error/:errorcode?" component={ErrorPage} />
        <Route render={() => <h1>This page is not implemented yet</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
