import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

export const getCategories = createAsyncThunk(
  "/category/get-categories",
  async (_, thunkApi) => {
    try {
      return await categoryService.getCategories();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  searchField: {
    name: undefined,
  },

  categories: [],
  name: undefined,
  description: undefined,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        (state.isSuccess = true), (state.categories = action.payload);
      })
      .addCase(getCategories.rejected, (state, action) => {
        (state.isError = true),
          (state.errorMessage = action.error.message || "");
      });
  },
});

export default categorySlice.reducer;
