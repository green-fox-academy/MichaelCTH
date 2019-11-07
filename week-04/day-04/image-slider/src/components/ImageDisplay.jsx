import React from 'react';

export default function ImageDisplay({ curImgIdx, images }) {
  return (
    <div className="ImgViwer">
      <img src={images[curImgIdx].urls.regular} alt={images[curImgIdx].alt_description} />
    </div>
  );
}
