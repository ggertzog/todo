import React, { useState } from 'react';
import { MainPage } from '../pages/main-page';
import { PopupAdd } from '@/features/popup/popup-add';
import { Overlay } from '@/shared/ui/overlay';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  }

  const handleClosePopup = () => {
    setIsOpen(false);
  }
 
  return (
    <>
      <MainPage handleOpenPopup={handleOpenPopup} />
      <PopupAdd isOpen={isOpen} handleClosePopup={handleClosePopup} />
      <Overlay isOpen={isOpen}></Overlay>
    </>
  )
}

export default App;