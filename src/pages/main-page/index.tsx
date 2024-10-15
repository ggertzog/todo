import React, { FC } from 'react';
import './index.scss';
import { ControlPanel } from '@/widgets/control-panel';
import { NoteList } from '@/widgets/note-list';
import { Button } from '@/shared/ui/button';
import { Plus } from 'lucide-react';

interface MainPageProps {
  handleOpenPopup: () => void;
}

export const MainPage: FC<MainPageProps> = ({handleOpenPopup}) => {
  return (
    <div className='main'>
      <div className='main__box'>
        <h1 className='main__title'>
              TODO LIST
          </h1>
          <ControlPanel />
      </div>
        
      <NoteList />
      <div className='main__box'>
        <Button variant='add' onClick={handleOpenPopup}>
          <Plus />
        </Button>
      </div>
    </div>
  )
}
