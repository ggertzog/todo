import React, { FC } from 'react';
import './index.scss';

interface ButtonProps {
  variant: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}

export const Button: FC<ButtonProps> = ({variant, children, onClick, type}) => {
  return (
    <button type={type} className={`button button_type_${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}
