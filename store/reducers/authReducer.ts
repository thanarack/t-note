import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuth {
  isAuth: boolean;
  username: string;
}

const initialState: IAuth = {
  isAuth: false,
  username: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<IAuth>) => {
      state.isAuth = action.payload.isAuth;
      state.username = action.payload.username;
    },
  },
});

export const { userLogin } = auth.actions;

export default auth.reducer;
