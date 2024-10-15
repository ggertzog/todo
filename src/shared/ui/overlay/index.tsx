import React, { FC } from 'react';
import './index.scss';

interface OverlayProps {
    isOpen: boolean;
}

export const Overlay: FC<OverlayProps> = ({isOpen}) => {
  return (
    <div className={`overlay ${isOpen && 'overlay_opened'}`}></div>
  )
}
