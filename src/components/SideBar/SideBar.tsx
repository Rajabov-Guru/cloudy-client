import React, { ReactNode } from 'react';
import { WithChildrenSx } from '../../common/types';
import Stack from '../Stack/Stack';
import './sidebar.css';

const SideBar = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return (
    <Stack vertical className={`sidebar ${className}`}>
      {children}
    </Stack>
  );
};

const SideBarHeader = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <div className={`sidebar-header ${className}`}>{children}</div>;
};

const SideBarBody = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <div className={`sidebar-body ${className}`}>{children}</div>;
};

const SideBarFooter = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <div className={`sidebar-footer ${className}`}>{children}</div>;
};

SideBar.Header = SideBarHeader;
SideBar.Body = SideBarBody;
SideBar.Footer = SideBarFooter;

export default SideBar;
