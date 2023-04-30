import React from 'react';
import { FileIcon, defaultStyles, DefaultExtensionType } from 'react-file-icon';
import './file-icon.css';

interface FileImageProps {
  ext: DefaultExtensionType;
  size: 'small' | 'medium' | 'large' | 'big';
}

const FileImage = (props: FileImageProps) => {
  const { ext, size } = props;
  return (
    <div className={`file-icon-wrapper file-icon-${size} m-auto `}>
      <FileIcon type="3d" extension={ext} {...defaultStyles[ext]} />
    </div>
  );
};

export default FileImage;
