import React, { ComponentType, ReactNode } from 'react';
import Stack from '../Stack/Stack';
import { WithChildrenSx, WithClasses } from '../../common/types';
import './bread-crumbs.css';

interface BreadCrumbsProps extends WithChildrenSx<ReactNode> {
  separator: string;
}

const BreadCrumbs = (props: BreadCrumbsProps) => {
  const { children, separator, className } = props;
  const items: ReactNode[] = React.Children.toArray(children);

  return (
    <Stack className={`bread-crumbs ${className}`}>
      {items.map((item, index) => (
        <Stack className={`bread-crumbs ${className}`} key={index}>
          <div>{item}</div>
          {index < items.length - 1 && <span className="bread-crumbs-separator">{separator}</span>}
        </Stack>
      ))}
    </Stack>
  );
};

export default BreadCrumbs;
