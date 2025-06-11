import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  countries: string[];
  states: string[];
  softwares: string[];
  industries: string[];
  services: string[];
  budget: string[];
}

const initialState: FilterState = {
  countries: [],
  states: [],
  softwares: [],
  industries: [],
  services: [],
  budget: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ key: keyof FilterState; value: string[] }>
    ) => {
      if (action.payload.key === "countries") {
        state.states = [];
      }
      state[action.payload.key] = action.payload.value;
    },
    // Optional: to clear all filters
    resetFilters: () => initialState,
  },
});

export const { setFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
