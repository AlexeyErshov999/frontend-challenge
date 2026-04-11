import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../hooks";
import { ICatImage } from "../../types/cats.types";
import { DEFAULT_CATS_LIMIT, fetchCats } from "../../api/catsApi";
import { mockData } from "../../mockdata";

interface CatsState {
  cats: ICatImage[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}

const initialState: CatsState = {
  cats: [],
  loading: false,
  error: null,
  page: 0,
  hasMore: true,
};

export const fetchCatsThunk = createAsyncThunk(
  "cats/fetchCats",
  async (page: number, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // const data = await fetchCats(page);
      // return data as ICatImage[];
      return mockData as ICatImage[];
    } catch (error) {
      return rejectWithValue(`Failed to get cats. Please, try again later)`);
    }
  },
);

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCatsThunk.fulfilled,
        (state, action: PayloadAction<ICatImage[]>) => {
          state.loading = false;
          state.cats.push(...action.payload);
          state.page += 1;

          if (action.payload.length < DEFAULT_CATS_LIMIT) {
            state.hasMore = false;
          }
        },
      )
      .addCase(fetchCatsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Unknown error";
      });
  },
});

export const selectCats = (state: RootState) => state.cats.cats;
export const selectCatsLoading = (state: RootState) => state.cats.loading;
export const selectCatsError = (state: RootState) => state.cats.error;
export const selectHasMore = (state: RootState) => state.cats.hasMore;

export default catsSlice.reducer;
