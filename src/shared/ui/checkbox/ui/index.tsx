import React, { FC } from 'react';
import './index.scss';

interface CheckboxProps {
  index: number;
}

export const Checkbox: FC<CheckboxProps> = ({index}) => {
  return (
    <>
      <input id={`checkbox-${index}`} className='custom-checkbox' type='checkbox' />
      <label htmlFor={`checkbox-${index}`}></label>
    </>
  )
}
