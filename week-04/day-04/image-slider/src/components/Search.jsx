import React from 'react';
import { Row, Col, Input, Button, Switch } from 'antd';

export default function Search({ setSearchKey, onClick }) {
  function onInputChange(e) {
    setSearchKey(e.target.value);
  }

  return (
    <Row>
      <Col span={6} offset={8}>
        <Input placeholder="Basic usage" onChange={onInputChange} />
      </Col>
      <Col span={2}>
        <Switch checkedChildren="JPG" unCheckedChildren="MP4" defaultChecked />
      </Col>
      <Col span={2}>
        <Button icon="search" onClick={onClick}>
          Search
        </Button>
      </Col>
    </Row>
  );
}
