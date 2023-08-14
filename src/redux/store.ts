import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { pokemonApi } from "./services/pokemon";

import rootReducer from "./reducers";
import directUsReducers from "./directUsReducers";

export const store = configureStore({
  reducer: {
    rootReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    directUs:directUsReducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
    
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
