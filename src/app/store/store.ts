import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import togglerReducer from './reducers/togglerSlice';
import myCanvasReducer from './reducers/myCanvasSlice';

export const store = configureStore({
  reducer: {
    togglerReducer,
    myCanvasReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
