import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
// export const addItemToCart = createAsyncThunk("ADD_ITEM_TO_CART", () => {
//   // return axios.get("/api/cart").then((r) => r.data); <- EJEMPLO DE CODIGO
// });
export const addItemToCart = createAction("ADD_TO_CART");
export const removeAllItems = createAction("REMOVE_ALL_ITEMS");

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = createReducer([], {
  // [addItemToCart.fulfilled]: (state, action) => action.payload,
  [addItemToCart]: (state, action) => {
    const index = state.findIndex((item) => item.name === action.payload.name);

    console.log("STATE", action.payload);
    if (index === -1) {
      state.push(action.payload);
    } else {
      state[index].total += state[index].price;
      state[index].cant += 1;
      //state.push({ ...action.payload });
    }

    return state;
  },
  [removeAllItems]: (state, action) => (state = []),
});

export default cartReducer;
