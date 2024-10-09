import React from 'react';
import './index.scss';
import { ControlPanel } from '../../widgets/control-panel';

export const MainPage = () => {
  return (
    <div className='main'>
        <h1 className='main__title'>
            TODO LIST
        </h1>
        <ControlPanel />
    </div>
  )
}
