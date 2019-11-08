import React from 'react';
import {
 Row, Col, Input, Button 
} from 'antd';

export default function Search({ setSearchKey, onClick }) {
  function goSearch() {
    const val = document.querySelector('.search-input-box').value;
    setSearchKey(val);
    onClick();
  }

  return (
    <Row className="search-bar">
      <Col span={6} offset={8}>
        <Input className="search-input-box" placeholder="Ex. Halloween" size="large" />
      </Col>
      <Col span={1}>
        <Button icon="search" onClick={goSearch} size="large">
          Search
        </Button>
      </Col>
    </Row>
  );
}
