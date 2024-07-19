import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

export const getCategories = createAsyncThunk(
  "/category/get-categories",
  async (_, thunkApi) => {
    try {
      return await categoryService.getAllCategories();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getCategoryById = createAsyncThunk(
  "/category/getCategoryById",
  async (id, thunkApi) => {
    try {
      return await categoryService.getCategoryById(id);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createCategory = createAsyncThunk(
  "/category/createCategory",
  async (data, thunkApi) => {
    try {
      return categoryService.createCategory(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "/category/updateCategory",
  async (data, thunkApi) => {
    try {
      return await categoryService.updateCategory(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "/category/deleteCategory",
  async (id, thunkApi) => {
    try {
      return await categoryService.deleteCategory(id);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  searchField: {
    categoryName: undefined,
  },
  categories: [],
  createCategory: undefined,
  categoryName: "",
  categoryDescription: "",
  updatedCategory: undefined,
  deletedCategory: undefined,
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
      })
      .addCase(getCategoryById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.categoryName = action.payload.name;
        state.categoryDescription = action.payload.description;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.error.message || "";
      })
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.createCategory = action.payload;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.error.message || "";
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.updatedCategory = action.payload;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.error.message || "";
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.deletedCategory = action.payload;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.error.message || "";
      });
  },
});

export default categorySlice.reducer;
