import React from 'react';
import { WithClasses } from '../../common/types';
import './checkbox.css';

interface CheckboxProps extends WithClasses {
  checked?: boolean;
  handleCheck?: (value: boolean) => void;
}

const Checkbox = (props: CheckboxProps) => {
  const { checked, handleCheck, className } = props;

  const handleChange = (value: boolean) => {
    if (handleCheck) handleCheck(value);
  };

  return (
    <>
      <input
        checked={checked}
        onChange={(e) => handleChange(!!e.target.value)}
        id="checkbox-all-search"
        type="checkbox"
        className={`checkbox ${className}`}
      />
      <label htmlFor="checkbox-all-search" className="sr-only">
        checkbox
      </label>
    </>
  );
};

export default Checkbox;
