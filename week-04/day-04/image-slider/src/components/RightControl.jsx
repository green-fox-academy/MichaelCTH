import React from 'react';
import { Icon } from 'antd';

export default function RightControl({ curImgIdx, updateImageIdx }) {
  return (
    <div>
      <Icon
        type="right"
        style={{ fontSize: '32px' }}
        onClick={() => updateImageIdx(curImgIdx + 1)}
      />
    </div>
  );
}
