import React, {FC} from 'react';
import './index.scss';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

export const Input: FC<InputProps> = ({placeholder, value, onChange, children}) => {
  return (
    <div className='container'>
      <input className={`input`} placeholder={placeholder} type='text' value={value} onChange={onChange} />
      {children}
    </div>
  )
}
