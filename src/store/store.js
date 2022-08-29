import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "./cart";
import userReducer from "./user";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
