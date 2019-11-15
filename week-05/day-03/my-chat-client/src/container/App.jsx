import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { loadHisChatMessage } from '../redux/actionCreater';
import Display from './Display';
import InputMessage from './InputMessage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHisChatMessage());
  });

  return (
    <div className="App">
      <Display />
      <hr />
      <InputMessage />
    </div>
  );
}

export default App;
