import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCustomCountryList,
  getCustomStateList,
  getAllSoftwareList,
  getAllIndustriesList,
  getServicesById,
  States,
} from "@/lib/apis/filter"; // Assume these exist and are thunk-compatible
import { isArray } from "lodash";

export type Option = {
  label: string;
  value: string;
  id?: string;
  iso2?: string;
};

interface FilterOptionsState {
  countries: Option[];
  states: { id: string; states: Option[] }[];
  softwares: Option[];
  industries: Option[];
  services: Option[];
}

const initialState: FilterOptionsState = {
  countries: [],
  states: [],
  softwares: [],
  industries: [],
  services: [],
};

export const fetchCountries = createAsyncThunk(
  "filters/fetchCountries",
  async () => {
    const countryList = await getCustomCountryList();
    return (
      isArray(countryList) &&
      countryList.map((x: { id: string; name: string; iso2?: string }) => ({
        label: x.name,
        value: x.name,
        id: x.id,
        iso2: x.iso2,
      }))
    );
  }
);

export const fetchStates = createAsyncThunk("filters/fetchStates", async () => {
  const stateList = await getCustomStateList();
  return (
    isArray(stateList) &&
    stateList.map((x: States) => ({
      id: x.id,
      states: x.states.map((y: { name: string }) => ({
        label: y.name,
        value: y.name,
      })),
    }))
  );
});

export const fetchSoftwares = createAsyncThunk(
  "filters/fetchSoftwares",
  async (tenentId?: string) => {
    const { softwareList } = await getAllSoftwareList(tenentId);
    return softwareList.map((x: string) => ({ label: x, value: x }));
  }
);

export const fetchIndustries = createAsyncThunk(
  "filters/fetchIndustries",
  async (tenentId?: string) => {
    const { industryList } = await getAllIndustriesList(tenentId);
    return industryList.map((x: string) => ({ label: x, value: x }));
  }
);

export const fetchServices = createAsyncThunk(
  "filters/fetchServices",
  async (tenentId?: string) => {
    const { serviceList } = await getServicesById(tenentId);
    return serviceList.map((x: string) => ({ label: x, value: x }));
  }
);

const filterOptionsSlice = createSlice({
  name: "filterOptions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.countries = [
            { label: "Worldwide", value: "Worldwide", id: "All" },
            ...action.payload,
          ];
        } else {
          state.countries = [];
        }
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.states = [...action.payload];
        } else {
          state.states = [];
        }
      })
      .addCase(fetchSoftwares.fulfilled, (state, action) => {
        state.softwares = [...action.payload];
      })
      .addCase(fetchIndustries.fulfilled, (state, action) => {
        state.industries = [...action.payload];
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.services = [...action.payload];
      });
  },
});

export default filterOptionsSlice.reducer;
