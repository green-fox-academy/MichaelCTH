import React from 'react';
import { Row, Col } from 'antd';
import LeftControl from './LeftControl';
import RightControl from './RightControl';
import ImageDisplay from './ImageDisplay';

export default function View({ curImgIdx, images, updateImageIdx }) {
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col span={3} className="NacController">
        <LeftControl curImgIdx={curImgIdx} updateImageIdx={updateImageIdx} />
      </Col>
      <Col span={18}>
        <ImageDisplay curImgIdx={curImgIdx} images={images} />
      </Col>
      <Col span={3} className="NacController">
        <RightControl curImgIdx={curImgIdx} updateImageIdx={updateImageIdx} />
      </Col>
    </Row>
  );
}
