import React, {FC} from 'react';
import './index.scss';

interface PopupProps {
    onSubmit: () => void;
    children: React.ReactNode;
}

export const Popup: FC<PopupProps> = ({onSubmit, children}) => {
  return (
    <form className='popup' onSubmit={onSubmit}>
        {children}
    </form>
  )
}
