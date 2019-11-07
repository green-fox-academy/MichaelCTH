import React from 'react';
import { Row, Avatar } from 'antd';

export default function SnapView({ images, updateImageIdx }) {
  return (
    <Row type="flex" justify="space-around" align="middle">
      {images.map((element, idx) => (
        <Avatar
          shape="square"
          size={64}
          src={element.urls.thumb}
          key={element.id}
          onClick={() => updateImageIdx(idx)}
        />
      ))}
    </Row>
  );
}
