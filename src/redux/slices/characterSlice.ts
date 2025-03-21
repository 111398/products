import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../types';

interface CharacterLikeState {
  characters: ICharacter[];
}

const initialState: CharacterLikeState = {
  characters: [],
};

export const characterLikeSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    like: (state, action: PayloadAction<ICharacter>) => {
      state.characters.push(action.payload);
    },
    unlike: (state, action: PayloadAction<number>) => {
      state.characters = state.characters.filter(
        (char) => char.id !== action.payload
      );
    },
  },
});

export const { like, unlike } = characterLikeSlice.actions;
export default characterLikeSlice.reducer;
