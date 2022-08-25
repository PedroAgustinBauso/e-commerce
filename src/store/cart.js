import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const addItemToCart = createAsyncThunk("ADD_ITEM_TO_CART", () => {
  // return axios.get("/api/cart").then((r) => r.data); <- EJEMPLO DE CODIGO
});

const cartReducer = createReducer([], {
  // [addItemToCart.fulfilled]: (state, action) => action.payload,
});

export default cartReducer;
