import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./slices/catsSlice";

export const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
