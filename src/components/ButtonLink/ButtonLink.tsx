import React from 'react';
import Button, { ButtonProps } from '../Button/Button';
import { Link } from 'react-router-dom';

interface ButtonLinkProps extends ButtonProps {
  to: string;
}

const ButtonLink = (props: ButtonLinkProps) => {
  const { to, children, Icon, className, fullWidth } = props;

  return (
    <Link to={to}>
      <Button Icon={Icon} fullWidth={fullWidth} className={className} variant="secondary">
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
