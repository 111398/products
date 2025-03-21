import { configureStore } from '@reduxjs/toolkit';
import characterLikeReducer from './slices/characterSlice';

const store = configureStore({
  reducer: {
    characters: characterLikeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
