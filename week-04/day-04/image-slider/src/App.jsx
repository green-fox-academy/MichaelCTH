import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import View from './components/View';
import SnapView from './components/SnapView';
import Loader from './components/Loader';
import Search from './components/Search';
import './App.css';

const ImgServer = 'https://api.unsplash.com/search/photos?';
const API_KEY = 'client_id=bd7e34cec1de978abb02af7a255e714c27bba042c0147f11b56e52d6763819de';

function App() {
  const [images, setImage] = useState([]);
  const [curImgIdx, setCurImgIdx] = useState(0);
  const [searchKey, setSearchKey] = useState('Saskatoon');

  function fetchImg() {
    setTimeout(() => {
      fetch(`${ImgServer + API_KEY}&query=${searchKey}`)
        .then((response) => response.json())
        .then((response) => response.results)
        .then(setImage);
    }, 1000);
  }

  function updateImageIdx(idx) {
    if (idx < 0 || idx >= images.length) {
      return;
    }
    setCurImgIdx(idx);
  }

  function keyHandler(event) {
    if (event.keyCode === 37) {
      updateImageIdx(curImgIdx - 1);
    }

    if (event.keyCode === 39) {
      updateImageIdx(curImgIdx + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    return () => window.removeEventListener('keydown', keyHandler);
  });

  // Fetch Data
  if (images.length === 0) {
    fetchImg();
    return <Loader />;
  }

  // render
  return (
    <>
      <div className="App">
        <Search setSearchKey={setSearchKey} onClick={() => setImage([])} />
        <Row>
          <Col span={20} offset={2}>
            <View curImgIdx={curImgIdx} images={images} updateImageIdx={updateImageIdx} />
          </Col>
          <Col span={14} offset={5}>
            <SnapView images={images} updateImageIdx={updateImageIdx} />
          </Col>
        </Row>
      </div>
      <footer>Hello</footer>
    </>
  );
}

export default App;
