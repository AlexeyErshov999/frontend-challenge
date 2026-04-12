import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../hooks";
import { ICatImage } from "../../types/cats.types";

interface FavoritesState {
  favorites: ICatImage[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<ICatImage>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (cat) => cat.id !== action.payload,
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
export const selectIsFavorite = (state: RootState, catId: string) =>
  state.favorites.favorites.some((cat) => cat.id === catId);

export default favoritesSlice.reducer;
