import React from 'react';
import { Row } from 'antd';

export default function SnapView({ curImgIdx, images, updateImageIdx }) {
  return (
    <Row type="flex" justify="space-around" align="middle" className="snap-view">
      {images.map((element, idx) => (
        // <Avatar
        //   shape="square"
        //   size={64}
        //   src={element.urls.thumb}
        //   key={element.id}
        //   onClick={() => updateImageIdx(idx)}
        // />
        <img
          className={curImgIdx === idx ? 'img-select' : 'img-unselect'}
          key={element.id}
          alt={element.alt_description}
          src={element.urls.thumb}
          onClick={() => updateImageIdx(idx)}
        />
      ))}
    </Row>
  );
}
