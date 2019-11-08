import React, { useEffect } from 'react';

export default function ImageDisplay({ curImgIdx, images }) {
  useEffect(() => {
    console.log(images);
    const parent = document.querySelector('.ImgViwer a');
    const child = document.querySelector('.ImgViwer a img');
    parent.removeChild(child);
    const newElement = document.createElement('img');
    newElement.src = images[curImgIdx].urls.regular;
    newElement.classList.add('hvrbox-layer_bottom');
    newElement.alt = images[curImgIdx].alt_description;
    parent.insertBefore(newElement, parent.firstChild);
  });
  return (
    <div className="ImgViwer content">
      <a href={images[curImgIdx].urls.full} target="_blank">
        <img />
      </a>
    </div>
  );
}
