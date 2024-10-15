import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "@/entities/list-item/model/INote";
import noteData from "@/entities/list-item/model/mock-data";

interface NoteState {
    notes: INote[];
}

const initialState: NoteState = {
    notes: noteData,
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<INote>) => {
            state.notes.push(action.payload);
        },
        deleteNote: (state, action: PayloadAction<number>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        editNote: (state, action: PayloadAction<INote>) => {
            const index = state.notes.findIndex(note => note.id === action.payload.id); // Находим индекс заметки
            if (index !== -1) { // Если заметка найдена
                state.notes[index] = action.payload; // Обновляем заметку
            }
        },
    }
})

export const {addNote, deleteNote, editNote} = noteSlice.actions;

export default noteSlice.reducer;