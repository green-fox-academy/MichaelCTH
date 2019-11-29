import React from 'react';
import banner from '../img/banner.jpg';

function Banner() {
  const style = {
    width: '100vw',
    height: '200px',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    color: 'lightgrey',
    fontSize: '30px',
    fontWeight: '300',
    letterSpacing: '5px',
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle',
  };
  return <div style={style}>DOODLE</div>;
}

export default Banner;
