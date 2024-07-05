import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categoryReducer from "./feature/category/categorySlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
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

export default store;
