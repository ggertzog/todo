import React, { FC, useEffect, useState } from 'react';
import { Popup } from '../..';
import { Input } from '@/shared/ui/input';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { editNote } from '../../reducer/NoteSlice';

interface PopupEditProps {
    isOpen: boolean;
    handleClosePopup: () => void;
    noteId: number | null;
}

export const PopupEdit: FC<PopupEditProps> = ({isOpen, handleClosePopup, noteId}) => {

    const dispatch = useAppDispatch();
    const notes = useAppSelector(state => state.note.notes);

    const[newValue, setNewValue] = useState('');

    useEffect(() => {
        if(noteId !== null) {
            const noteToEdit = notes.find(note => note.id === noteId);
            if(noteToEdit) {
                setNewValue(noteToEdit.note);
            }
        }
    }, [noteId, notes])

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.target.value);
    }

    const handleEditNote = (e: React.FormEvent) => {
        e.preventDefault();
        if (noteId !== null && newValue) {
            const updatedNote = {
                id: noteId, 
                note: newValue,
            }
            dispatch(editNote(updatedNote));
            setNewValue('');
            handleClosePopup();
        } else {
            alert('Ошибка: не удалось обновить заметку. Пожалуйста, попробуйте еще раз.'); 
        }
    }

    return (
        <>
            <Popup isOpen={isOpen} handleClosePopup={handleClosePopup} onSubmit={handleEditNote}>
                <div className='popup__container'>
                    <h2 className='popup__title'>EDIT YOUR NOTE</h2>
                    <Input placeholder='edit your note...' value={newValue} onChange={handleChangeValue}></Input>
                </div>
            </Popup>
        </>
    )
}
