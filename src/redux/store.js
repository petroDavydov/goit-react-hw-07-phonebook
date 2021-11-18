import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactReducer from "./Phonebook/phone-reducer";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"], //не допускать в локалсторедж
  // whitelist: ['filter'], --допускать в локалторедж
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
];

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactReducer),
  },
  devTools: process.env.NODE_ENV === "development",
  middleware,
});

export const persistor = persistStore(store);
