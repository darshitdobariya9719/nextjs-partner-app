import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DirectoryListItem } from "@/lib/types/featuredList";

interface DirectoryListingState {
  items: DirectoryListItem[];
  totalItems: number;
  loading: boolean;
}

const initialState: DirectoryListingState = {
  items: [],
  totalItems: 0,
  loading: false,
};

const directoryListingSlice = createSlice({
  name: "directoryListing",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<DirectoryListItem[]>) {
      state.items = action.payload;
    },
    appendItems(state, action: PayloadAction<DirectoryListItem[]>) {
      const newItems = action.payload;
      const uniqueItems = newItems.filter(
        (item) => !state.items.some((i) => i.tenantId === item.tenantId)
      );
      state.items = [...state.items, ...uniqueItems];
    },
    setTotalItems(state, action: PayloadAction<number>) {
      state.totalItems = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    resetDirectoryListing(state) {
      state.items = [];
      state.totalItems = 0;
      state.loading = false;
    },
  },
});

export const {
  setItems,
  appendItems,
  setTotalItems,
  setLoading,
  resetDirectoryListing,
} = directoryListingSlice.actions;

export default directoryListingSlice.reducer;
