import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import postsSlice from "../redux/posts.slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
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
