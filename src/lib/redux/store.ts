import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import directoryListingReducer from "./slices/directoryListingSlice";
import filterReducer from "./slices/filterSlice";
import filterOptionsReducer from "./slices/filterOptionsSlice";

export const store = configureStore({
  reducer: {
    directoryListing: directoryListingReducer,
    filters: filterReducer,
    filterOptions: filterOptionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
