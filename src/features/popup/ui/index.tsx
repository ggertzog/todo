import React, {FC} from 'react';
import './index.scss';
import { Button } from '@/shared/ui/button';

interface PopupProps {
  isOpen: boolean;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  handleClosePopup: () => void;
}

export const Popup: FC<PopupProps> = ({ isOpen, onSubmit, children, handleClosePopup }) => {
  return (
    <form className={`popup ${isOpen && 'popup_opened'}`} onSubmit={onSubmit}>
      {children}
      <div className='popup__box'>
        <Button variant='cancel' onClick={handleClosePopup}>CANCEL</Button>
        <Button variant='apply' type="submit" >APPLY</Button>
      </div>
    </form>
  )
}
