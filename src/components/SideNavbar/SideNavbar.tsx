import React, { ComponentType, ReactNode, useRef } from 'react';
import { WithChildrenSx, WithClasses } from '../../common/types';
import { Link } from 'react-router-dom';
import './side-navbar.css';
import useRipple from '../Ripple/useRipple';

interface SideNavbarProps extends WithChildrenSx<ReactNode> {
  h?: string;
}

const SideNavbar = (props: SideNavbarProps) => {
  const { children, className } = props;
  return <ul className={`side-navbar ${className}`}>{children}</ul>;
};

interface SideNavbarItemProps extends WithClasses {
  Icon: ComponentType<WithClasses>;
  title: string;
  active?: boolean;
}

const SideNavbarItem = (props: SideNavbarItemProps) => {
  const { Icon, title, active, className } = props;

  return (
    <Link to="/" className={`group side-navbar-item ${active && 'side-navbar-item_active'} ${className}`}>
      <li className="side-navbar-item-content">
        <Icon
          className={`z-40 text-white group-hover:text-white group-focus:text-white ${active ? 'text-white' : ''}`}
        />
        <p className="z-40">{title}</p>
      </li>
    </Link>
  );
};

SideNavbar.Item = SideNavbarItem;

export default SideNavbar;
