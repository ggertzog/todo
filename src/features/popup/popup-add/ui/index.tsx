import React, { FC, useState } from 'react';
import './index.scss';
import { Popup } from '@/features/popup';
import { Input } from '@/shared/ui/input';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { addNote } from '../reducer/NoteSlice';

interface PopupAddProps {
    isOpen: boolean;
    handleClosePopup: () => void;
}

export const PopupAdd: FC<PopupAddProps> = ({isOpen, handleClosePopup}) => {

    const dispatch = useAppDispatch();
    const notes = useAppSelector(state => state.note.notes);

    const[value, setValue] = useState('');

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleAddNote = (e: React.FormEvent) => {
        e.preventDefault();
        if(value.length > 3) {
            const newNote = {
                id: notes.length + 1,
                note: value
            }
            dispatch(addNote(newNote));
            setValue('');
        } else {
            alert('Должно быть больше 3 символов')
        }
    }


    return (
        <>
            <Popup isOpen={isOpen} handleClosePopup={handleClosePopup} onSubmit={handleAddNote}>
                <div className='popup__container'>
                    <h2 className='popup__title'>NEW NOTE</h2>
                    <Input placeholder='input your note...' value={value} onChange={handleChangeValue}></Input>
                </div>
            </Popup>
        </>
    )
}