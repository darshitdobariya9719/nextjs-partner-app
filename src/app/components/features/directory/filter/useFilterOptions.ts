import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  fetchStates,
  fetchSoftwares,
  fetchIndustries,
  fetchServices,
  Option,
} from "@/lib/redux/slices/filterOptionsSlice";
import { RootState, AppDispatch } from "@/lib/redux/store";
import { dropdownBudgetOptions, serviceCategoryOptions } from "@/lib/utils/constantValues";
export interface FilterOptions {
  countries: Option[];
  states: Option[]|[]; // ✅ include this
  softwares: Option[];
  industries: Option[];
  services: Option[];
  budget: Option[];
}

export const useFilterOptions = (tenantId: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const filterOptions = useSelector((state: RootState) => state.filterOptions);
  const filters = useSelector((state: RootState) => state.filters);
  const options:FilterOptions = {
    countries: filterOptions.countries,
    softwares: filterOptions.softwares,
    industries: filterOptions.industries,
    services: filterOptions.services.length>0?filterOptions.services:serviceCategoryOptions,
    states: [],
    budget:dropdownBudgetOptions,
  };

  if(filters.countries.length > 0) {
    const countryList = filterOptions.countries.filter(country => filters.countries.includes(country.label)).map(country => country.id);
    const states = filterOptions.states.filter(state => countryList.includes(state.id));
    const flatStates = states.flatMap(state => state.states);
    options['states'] = flatStates;
  }else{
    const flatStates = filterOptions.states.flatMap(state => state.states);
    options['states'] = flatStates;
  }


  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchStates());
    if(tenantId&&tenantId!==''){
      dispatch(fetchSoftwares(tenantId));
      dispatch(fetchIndustries(tenantId));
      dispatch(fetchServices(tenantId));
    }else{
      dispatch(fetchSoftwares());
      dispatch(fetchIndustries());
      dispatch(fetchServices());
    }
  }, [dispatch, tenantId]);

  return options;
};
