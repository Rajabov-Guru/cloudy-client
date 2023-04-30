import React, { ReactNode } from 'react';
import { WithChildrenSx } from '../../common/types';
import Stack from '../Stack/Stack';
import './layout.css';

const Layout = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <Stack className={`layout ${className}`}>{children}</Stack>;
};

const LayoutSideBar = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <div className={`layout-sidebar ${className}`}>{children}</div>;
};

const LayoutMain = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return (
    <Stack vertical className={`layout-main ${className}`}>
      {children}
    </Stack>
  );
};

const LayoutBody = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <Stack className={`layout-body ${className}`}>{children}</Stack>;
};

const LayoutContent = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <div className={`layout-content ${className}`}>{children}</div>;
};

const LayoutHeader = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <div className={`layout-header ${className}`}>{children}</div>;
};

const LayoutInfoBar = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <div className={`layout-infoBar ${className}`}>{children}</div>;
};

Layout.SideBar = LayoutSideBar;
Layout.Main = LayoutMain;
Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;
Layout.Content = LayoutContent;
Layout.InfoBar = LayoutInfoBar;

export default Layout;
