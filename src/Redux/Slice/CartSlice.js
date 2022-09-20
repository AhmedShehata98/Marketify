import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEmpty:
    localStorage.cartData !== null &&
    JSON.parse(localStorage.cartData).length > 0
      ? false
      : true,
  cartData:
    localStorage.cartData !== undefined
      ? JSON.parse(localStorage.cartData)
      : [],
  cartItemsLength:
    localStorage.cartData !== undefined
      ? JSON.parse(localStorage.cartData)?.length
      : 0,
  TotalProductsPrice:
    localStorage.cartData !== undefined
      ? JSON.parse(localStorage.cartData)
          .map((product) => product.price)
          .reduce((curr, next) => curr + next)
      : 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM_TO_CART: (state, actions) => {
      state.cartData.push(actions.payload);
      state.cartItemsLength = state.cartData.length;
      state.isEmpty = state.cartData.length === 0 ? true : false;
      // save cart items in localStorage
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
      localStorage.setItem(
        "cartDataLength",
        JSON.stringify(state.cartItemsLength)
      );
    },
    REMOVE_ITEM_FROM_CART: (state, actions) => {
      const newCartData = state.cartData.filter(
        (item) => item.id !== actions.payload.id
      );
      state.cartData = newCartData;
      state.cartItemsLength = state.cartData.length;
      state.isEmpty = state.cartData.length === 0 ? true : false;
      state.TotalProductsPrice = newCartData
        .map((product) => product.price)
        .reduce((curr, next) => curr + next);
      // save cart items in localStorage
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
      localStorage.setItem(
        "cartDataLength",
        JSON.stringify(state.cartItemsLength)
      );
    },
    CLEAR_CART: (state) => {
      state.cartData = [];
      state.cartItemsLength = 0;
      state.isEmpty = true;
      // Remove local storage from cart data
      localStorage.removeItem("cartData");
      localStorage.removeItem("cartDataLength");
    },
  },
});

export const { ADD_ITEM_TO_CART, CLEAR_CART, REMOVE_ITEM_FROM_CART } =
  cartSlice.actions;
