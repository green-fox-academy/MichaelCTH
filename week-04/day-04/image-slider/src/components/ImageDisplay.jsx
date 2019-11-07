import React, { useEffect } from 'react';

export default function ImageDisplay({ curImgIdx, images }) {
  useEffect(() => {
    document.querySelector('.ImgViwer').style.transition = '1s ease-in-out';
    document.querySelector('.ImgViwer').style.opacity = 1;

    return () => {
      document.querySelector('.ImgViwer').style.opacity = 0;
    };
  });
  return (
    <div className="ImgViwer">
      <img src={images[curImgIdx].urls.regular} alt={images[curImgIdx].alt_description} />
    </div>
  );
}
