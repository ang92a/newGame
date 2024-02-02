import { legacy_createStore as createStore, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { authReducers } from './reducers/authReducers';
import { gameReducers } from './reducers/gameReducers';
import { themeReducers } from './reducers/themeReducers';

export const store = createStore(
  combineReducers({
    auth: authReducers,
    theme: themeReducers,
    game: gameReducers,
  }),
); // формирование store

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
