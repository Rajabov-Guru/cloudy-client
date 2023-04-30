import React, { ComponentType } from 'react';
import { WithClasses } from '../../common/types';
import './input.css';
import Button from '../Button/Button';

interface InputProps extends WithClasses {
  Icon?: ComponentType<WithClasses>;
  placeholder: string;
}
const Input = (props: InputProps) => {
  const { Icon, placeholder, className } = props;
  return (
    <div className={`input-container ${className}`}>
      <input type="text" placeholder={placeholder} className={`input ${Icon && 'input-withIcon'}`} />
      {Icon && (
        <div className="input-icon-container">
          <Button variant="transparent" Icon={Icon} className="input-icon"></Button>
        </div>
      )}
    </div>
  );
};

export default Input;
