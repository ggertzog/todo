import React, { FC, useState } from 'react';
import './index.scss';
import { ListItem } from '@/entities/list-item/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { PopupEdit } from '@/features/popup/popup-edit';
import { Overlay } from '@/shared/ui/overlay';


export const NoteList: FC = () => {

  const notes = useAppSelector(state => state.note.notes);

  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [editNoteId, setEditNoteId] = useState<number | null>(null);

  const handleOpenEditPopup = (id: number) => {
    setEditNoteId(id); 
    setEditPopupOpen(true); 
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
    setEditNoteId(null); 
  };

  return (
    <>
      <ul className='note-list'>
          {notes && notes.map((item) => {
              return (
                  <ListItem key={item.id} id={item.id} note={item.note} handleOpenEditPopup={handleOpenEditPopup} />
              )
          })}
      </ul>
      <PopupEdit
        isOpen={isEditPopupOpen}
        handleClosePopup={handleCloseEditPopup}
        noteId={editNoteId} 
      />
      <Overlay isOpen={isEditPopupOpen}></Overlay>
    </>
    
  )
}
