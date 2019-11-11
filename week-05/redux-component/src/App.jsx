import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import Increaser from './components/Increaser';
import Decreaser from './components/Decreaser';
import Resetter from './components/Resetter';
import Setter from './components/Setter';
import Tags from './components/Tags';
import AddTag from './components/AddTag';
import ComplexCounter from './components/ComplexCounter';
import RemoveTag from './components/RemoveTag';
import RemoveAllTags from './components/RemoveAllTags';

function App() {
  return (
    <Provider store={store}>
      <Increaser />
      <Decreaser />
      <Resetter />
      <Setter />
      <br />
      <Tags />
      <AddTag />
      <ComplexCounter />
      <RemoveTag />
      <RemoveAllTags />
    </Provider>
  );
}

export default App;
