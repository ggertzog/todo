import React, {FC} from 'react';
import './index.scss';
import { Checkbox } from '@/shared/ui/checkbox';
import { EditingButton } from '@/shared/ui/editing-button';
import { useAppDispatch } from '@/app/hooks/redux';
import { deleteNote } from '@/features/popup/popup-add/reducer/NoteSlice';

interface ListItemProps {
  id: number;
  note: string;
  handleOpenEditPopup: (id: number) => void
}

export const ListItem: FC<ListItemProps> = ({ id, note, handleOpenEditPopup }) => {

  const dispatch = useAppDispatch();

  const handleDeleteNote = () => {
    dispatch(deleteNote(id))
  }

  const openEditPopup = () => {
    handleOpenEditPopup(id); // Передаем id редактируемой заметки
  }

  return (
    <li className='item'>
      <Checkbox index={id} />
      <p className='item__text'>{note}</p>
      <div className='item__box'>
        <EditingButton type='pen' onClick={openEditPopup}/>
        <EditingButton type='trash' onClick={handleDeleteNote}/>
      </div>
    </li>
  )
}
