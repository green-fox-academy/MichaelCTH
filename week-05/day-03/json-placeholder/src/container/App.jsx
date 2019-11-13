/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadDataFromAPI } from '../redux/actionCreater';

function App() {
  const dataList = useSelector((state) => state.dataList);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>State: {message}</p>
      <input type="submit" value="Load JSON Data" onClick={() => dispatch(loadDataFromAPI())} />
      {dataList.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
