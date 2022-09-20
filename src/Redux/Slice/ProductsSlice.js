import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//slice's
import { ADD_ITEM_TO_CART } from "./CartSlice";

//
//
const API_URL = "https://dummyjson.com";
//
export const GET_PRODUCT_ACTION = createAsyncThunk(
  "products/list",
  async ({ skip, limit, signal }, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const res = await axios({
        method: "GET",
        url: `${API_URL}/products`,
        params: { limit, skip },
      });
      //
      const data = await res.data;
      return data;
      //
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const GET_ALL_CATEGORIES = createAsyncThunk(
  "products/categories",
  async (signal, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const res = await axios({
        method: "GET",
        url: `${API_URL}/products/categories`,
        signal,
      });
      //
      const data = await res.data;
      return data;
      //
    } catch (error) {
      if (error.code !== "ERR_CANCELED") {
        throw rejectWithValue(error);
      }
    }
  }
);
export const GET_FETURED_PRODUCT = createAsyncThunk(
  "products/featured",
  async (signal, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const res = await axios({
        method: "GET",
        url: `${API_URL}/products`,
        params: { limit: 11 },
        signal,
      });
      //
      const data = await res.data;
      return data;
      //
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const GET_PRODUCTS_BY_CATEGORY = createAsyncThunk(
  "products/byCategory",
  async ({ category }, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const res = await axios({
        method: "GET",
        url: `${API_URL}/products/category/${category}`,
      });
      //
      const data = await res.data;
      return data;
      //
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

const initialState = {
  isPinding: null,
  isError: null,
  ErrorMsg: null,
  isSuccess: null,
  allProducts: null,
  categoriesData: null,
  featuredProducts: null,
  productsByCategory: null,
  hasMore: true,
  isavailableProducts: null,
  total: 0,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GET_PRODUCT_ACTION.pending, (state, action) => {
      state.isPinding = true;
      state.ErrorMsg = null;
      state.isSuccess = null;
    });
    builder.addCase(GET_PRODUCT_ACTION.fulfilled, (state, action) => {
      const total = action.payload.total;
      //
      state.allProducts = action.payload.products;
      state.productsByCategory = null;
      state.isError = null;
      state.ErrorMsg = null;
      state.isSuccess = true;
      state.total = total;
      if (state.allProducts.length === total) {
        state.hasMore = false;
      } else {
        state.hasMore = true;
      }
      if (total <= 0) {
        state.isavailableProducts = false;
      } else {
        state.isavailableProducts = true;
      }
      state.isPinding = false;
    });
    builder.addCase(GET_PRODUCT_ACTION.rejected, (state, action) => {
      state.isError = true;
      state.ErrorMsg = action.payload;
      state.isSuccess = null;
      state.isPinding = false;
    });
    builder.addCase(GET_FETURED_PRODUCT.pending, (state, action) => {
      state.isPinding = true;
      state.ErrorMsg = null;
      state.isSuccess = null;
      state.isError = null;
    });
    builder.addCase(GET_FETURED_PRODUCT.fulfilled, (state, action) => {
      state.ErrorMsg = null;
      state.isError = null;
      state.featuredProducts = action.payload.products;
      state.hasMore =
        action.payload.total >= action.payload.products.length ? false : true;
      state.featuredProducts
        ? (state.isSuccess = true)
        : (state.isSuccess = null);
      state.isPinding = false;
    });
    builder.addCase(GET_FETURED_PRODUCT.rejected, (state, action) => {
      state.ErrorMsg = action.payload;
      state.isSuccess = null;
      state.isError = true;
      state.isPinding = false;
    });
    builder.addCase(GET_ALL_CATEGORIES.pending, (state, action) => {
      state.isPinding = true;
      state.ErrorMsg = null;
      state.isError = null;
      state.isSuccess = null;
    });
    builder.addCase(GET_ALL_CATEGORIES.fulfilled, (state, action) => {
      state.categoriesData = action.payload;
      state.ErrorMsg = null;
      state.isSuccess = true;
      state.isError = null;
      state.isPinding = false;
    });
    builder.addCase(GET_ALL_CATEGORIES.rejected, (state, action) => {
      state.isSuccess = null;
      state.ErrorMsg = action.payload;
      state.isError = true;
      state.isPinding = false;
    });
    builder.addCase(GET_PRODUCTS_BY_CATEGORY.pending, (state, action) => {
      state.isPinding = true;
      state.isSuccess = null;
      state.ErrorMsg = null;
      state.isError = null;
      state.productsByCategory = [];
    });
    builder.addCase(GET_PRODUCTS_BY_CATEGORY.fulfilled, (state, action) => {
      const total = action.payload.total;
      const limit = action.payload.limit;
      //
      state.ErrorMsg = null;
      state.isError = null;
      if (action.payload) {
        state.isSuccess = true;
        state.productsByCategory = action.payload.products;
        state.allProducts = null;
      }
      if (limit === total) {
        state.hasMore = false;
      } else {
        state.hasMore = true;
      }
      if (total <= 0) {
        state.isavailableProducts = false;
      } else {
        state.isavailableProducts = true;
      }
      state.isPinding = false;
    });
    builder.addCase(GET_PRODUCTS_BY_CATEGORY.rejected, (state, action) => {
      state.ErrorMsg = action.payload;
      state.isError = true;
      state.isSuccess = null;
      state.isPinding = false;
    });
    builder.addCase(ADD_ITEM_TO_CART, function (state, actions) {
      const incomingProductID = actions.payload.id;
      const getProductTarget = state.allProducts.find(
        (p) => p.id === incomingProductID
      );
      const modifedTarget = { ...getProductTarget, insideCart: true };
      const newProductsArr = state.allProducts.filter(
        (p) => p.id !== incomingProductID
      );
      newProductsArr.push(modifedTarget);
      state.allProducts = newProductsArr;
    });
  },
});
