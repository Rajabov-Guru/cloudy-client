import React from 'react';
import { WithClasses } from '../../common/types';
import './avatar.css';

interface AvatarProps extends WithClasses {
  src: string;
}
const Avatar = (props: AvatarProps) => {
  const { src, className } = props;
  return (
    <div className={`avatar ${className}`}>
      <img alt="avatar" src={src} className="avatar-img" />
    </div>
  );
};
export default Avatar;
