import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import mock from '../../components/constants/mockData';

export interface INoteReducer {
  data: INoteItemData[];
  searchText?: string;
}

export interface INoteItemData {
  id: number;
  title: string;
  description: string;
}

const initialState: INoteReducer = {
  data: mock().notes,
  searchText: '',
};

export const note = createSlice({
  name: 'note',
  initialState,
  reducers: {
    createNewNote: (state, action: PayloadAction<INoteItemData>) => {
      state.data.push(action.payload);
    },
    updateSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { createNewNote, updateSearchText } = note.actions;

export default note.reducer;
