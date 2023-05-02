import React from 'react';
import './image.css';
import { Size } from '../../common/types';

interface ImageProps {
  src: string;
  rounded?: boolean;
  size: Size;
}

const Image = (props: ImageProps) => {
  const { src, rounded, size } = props;
  return (
    <div className={`image image-${size} ${rounded && 'image-rounded'}`}>
      <img className={`${rounded && 'image-rounded'}`} alt="sa" src={src} />
    </div>
  );
};

export default Image;
