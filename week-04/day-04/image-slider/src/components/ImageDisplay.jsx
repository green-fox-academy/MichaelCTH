import React, { useEffect } from 'react';

export default function ImageDisplay({ curImgIdx, images }) {
  useEffect(() => {
    console.log(images);
    const parent = document.querySelector('.ImgViwer');
    const child = document.querySelector('.ImgViwer img');
    parent.removeChild(child);
    const newElement = document.createElement('img');
    newElement.src = images[curImgIdx].urls.regular;
    newElement.classList.add('hvrbox-layer_bottom');
    newElement.alt = images[curImgIdx].alt_description;
    parent.insertBefore(newElement, parent.firstChild);
  });
  return (
    <div className="ImgViwer content">
      <img />
      <a href={images[curImgIdx].urls.full} target="_blank">
        <div className="content-overlay" />
      </a>
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">{images[curImgIdx].alt_description}</h3>
      </div>
    </div>
  );
}
