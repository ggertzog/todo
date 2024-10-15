import { configureStore } from "@reduxjs/toolkit";
import noteReducer from '@/features/popup/reducer/NoteSlice';

const store = configureStore({
    reducer: {
        note: noteReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;