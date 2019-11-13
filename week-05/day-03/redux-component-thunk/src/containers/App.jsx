import React from 'react';
import '../App.css';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Increaser from './Increaser';
import Decreaser from './Decreaser';
import Resetter from './Resetter';
import Setter from './Setter';
import Tags from './Tags';
import AddTag from './AddTag';
import ComplexCounter from './ComplexCounter';
import RemoveTag from './RemoveTag';
import RemoveAllTags from './RemoveAllTags';
import AsyncIncreament from './AsyncIncreament';

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
      <AsyncIncreament />
    </Provider>
  );
}

export default App;
