import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharacterLikeState {
  characters: number[];
}

const initialState: CharacterLikeState = {
  characters: [],
};

export const characterLikeSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    like: (state, action: PayloadAction<number>) => {
      state.characters.push(action.payload);
    },
    unlike: (state, action: PayloadAction<number>) => {
      state.characters = state.characters.filter(
        (id: number) => id !== action.payload
      );
    },
  },
});

export const { like, unlike } = characterLikeSlice.actions;
export default characterLikeSlice.reducer;
