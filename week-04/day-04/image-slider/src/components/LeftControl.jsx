import React from 'react';
import { Icon } from 'antd';

export default function LeftControl({ curImgIdx, updateImageIdx }) {
  return (
    <div className="control-arrow">
      <Icon
        type="left"
        style={{ fontSize: '32px' }}
        onClick={() => updateImageIdx(curImgIdx - 1)}
      />
    </div>
  );
}
