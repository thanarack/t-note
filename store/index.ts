import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from './reducers/authReducer';
import noteReducer from './reducers/noteReducer';
import themeReducer from './reducers/themeReducer';
import { useDispatch } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  noteReducer,
  authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* Creating a store with the persistedReducer and the middleware. */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export const useAppDispatch: () => AppDispatch = useDispatch;
