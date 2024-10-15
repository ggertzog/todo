import { configureStore } from "@reduxjs/toolkit";
import noteReducer from '@/features/popup/popup-add/reducer/NoteSlice';

const store = configureStore({
    reducer: {
        note: noteReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;