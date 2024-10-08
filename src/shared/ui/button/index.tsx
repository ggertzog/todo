import React, { FC } from 'react';
import './index.scss';

interface ButtonProps {
  variant: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({variant, children, onClick}) => {
  return (
    <button className={`button button_type_${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}
