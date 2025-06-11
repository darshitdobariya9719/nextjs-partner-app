import { FilterState, resetFilters, setFilter } from "@/lib/redux/slices/filterSlice";
import { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const useFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

   const updateFilter = (key: keyof FilterState, value: string[]) => {
    dispatch(setFilter({ key, value }));
  };

  const clearAllFilters = () => {
    dispatch(resetFilters());
  };

  return {
    filters,
    updateFilter,
    clearAllFilters,
  };
};
