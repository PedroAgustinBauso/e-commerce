import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "./cart";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    cart: cartReducer,
  },
});
