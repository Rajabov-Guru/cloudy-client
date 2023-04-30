import React, { ComponentType, ReactNode, useRef } from 'react';
import { WithChildrenSx, WithClasses } from '../../common/types';
import './button.css';
import useRipple from '../Ripple/useRipple';

type BtnVariant = 'primary' | 'secondary' | 'tertiary' | 'quarternary' | 'transparent';

export interface ButtonProps extends WithChildrenSx<ReactNode> {
  Icon?: ComponentType<WithClasses>;
  fullWidth?: boolean;
  onClick?: () => void;
  variant?: BtnVariant;
}
const Button = (props: ButtonProps) => {
  const { children, Icon, className, fullWidth, onClick, variant = 'primary' } = props;

  const ref = useRef<HTMLButtonElement>(null);
  const ripples = useRipple(ref);

  return (
    <button ref={ref} onClick={onClick} className={`btn btn-${variant} ${fullWidth && 'w-full'} ${className}`}>
      {ripples}
      {children}
      {Icon && <Icon className={`btn-icon btn-icon-${variant}`} />}
    </button>
  );
};

export default Button;
