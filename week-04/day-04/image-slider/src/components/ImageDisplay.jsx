import React from 'react';
import { Empty } from 'antd';

export default function ImageDisplay({ curImgIdx, images }) {
  return (
    <div className="ImgViwer">
      {/* <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        imageStyle={{ height: 600 }}
        description={<span>Made in China</span>}
      /> */}
      <img src={images[curImgIdx].urls.regular} />
    </div>
  );
}
