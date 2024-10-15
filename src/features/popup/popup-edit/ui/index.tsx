import React, { FC, useEffect, useState } from 'react';
import { Popup } from '../..';
import { Input } from '@/shared/ui/input';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { editNote } from '../../popup-add/reducer/NoteSlice';
import { INote } from '@/entities/list-item/model/INote';

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
                id: noteId, // Убедитесь, что noteId передается правильного типа
                note: newValue,
            }
            dispatch(editNote(updatedNote)); // Диспатч для обновления заметки
            setNewValue(''); // Очищаем поле
            handleClosePopup(); // Закрываем попап
        } else {
            alert('Ошибка: не удалось обновить заметку. Пожалуйста, попробуйте еще раз.'); // Обработайте случай с null
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
