import React, { ReactNode } from 'react';
import { WithChildrenSx } from '../../common/types';
import './stack.css';

interface StackProps extends WithChildrenSx<ReactNode> {
  vertical?: boolean;
}

const Stack = (props: StackProps) => {
  const { children, className, vertical } = props;
  return <div className={`${vertical ? 'stack-vertical' : 'stack'}  ${className}`}>{children}</div>;
};

export default Stack;
