import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import counterSlide from "./couterSlide";
import imageSlice from "./imageSlide";
import { pokemonApi } from "./prokemon";
import { setupListeners } from "@reduxjs/toolkit/query";
const persistConfig = {
  key: "image",
  storage: AsyncStorage,
};
const persistedImageReducer = persistReducer(persistConfig, imageSlice);
export const store = configureStore({
  reducer: {
    counter: counterSlide,
    image: persistedImageReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
