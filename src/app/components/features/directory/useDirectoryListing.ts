"use client";
import { useCallback, useEffect, useState } from "react";
import api from "@/lib/axiosClient";
// import { useRouter } from "next/navigation";
import {
  DirectoryListItem,
  DirectoryListResponse,
} from "@/lib/types/featuredList";
import { AxiosError } from "axios";
import { useAppDispatch } from "@/lib/redux/store";
import { setItems, setLoading, setTotalItems } from "@/lib/redux/slices/directoryListingSlice";
import { currenciesList } from "@/lib/utils/constantValues";
import { useFilters } from "./filter/useFilters";

interface RequestData {
  limit: number;
  offset: number;
  filters?: object;
  search?: string;
  ordering?: string;
  tenantId?: string;
  currencyCode?: string;
}

interface UseDirectoryListingProps {
  directoryListingList: DirectoryListItem[];
  totalItems: number;
  fixedPageLimit: number;
  tenentId?: string;
}

interface SortingOption {
  value: string;
  label: string;
}

export const useDirectoryListing = ({
  directoryListingList,
  totalItems,
  fixedPageLimit,
  tenentId,
}: UseDirectoryListingProps) => {
  // const router = useRouter();
  const dispatch = useAppDispatch();
  const { filters } = useFilters();
  const [searchResults, setSearchResults] = useState<DirectoryListItem[]>([]);
  const [searchListLoading, setSearchListLoading] = useState(false);
  const [directoryListing, setDirectoryListing] = useState<DirectoryListItem[]>(
    []
  );
  const [sortingOption, setsortingOption] = useState<SortingOption | null>(
    null
  );
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  
  const fetchSearchResults = async (query: string) => {
    if (!query || query.length < 3) {
      setSearchResults([]);
      return;
    }

    try {
      setSearchListLoading(true);

      const { data } = await api.post<DirectoryListResponse>(
        "/sc/directory/search",
        {
          search: query,
          tenantId: tenentId,
        }
      );

      setSearchResults(data?.directoryList || []);
    } catch (error) {
      console.error("Search API error:", error);
      setSearchResults([]);
    } finally {
      setSearchListLoading(false);
    }
  };

  const updateSort = (option: SortingOption | null) => {
    setsortingOption(option);
  };

  const getDirectoryListing = async (
    requestData: RequestData
  ): Promise<DirectoryListResponse | string> => {
    try {
      const { data } = await api.post("/sc/directory/list/v1", requestData);
      return data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message?: string }>;
      return (
        axiosError.response?.data?.message ||
        axiosError.message ||
        "An unknown error occurred"
      );
    }
  };

  const getAllDirectoryListing = useCallback(
    async (requestData: RequestData, type: "initial" | "loadMore") => {
      const currency = getCurrency();
      const response = await getDirectoryListing({
        ...requestData,
        currencyCode: currency.code,
      });

      if (typeof response !== "string" && response?.directoryList) {
        dispatch(setTotalItems(response.total));
        if (type === "loadMore") {
          setDirectoryListing((prev) => {
            const combined = [...prev, ...response.directoryList];
            return combined.filter(
              (item, index, self) =>
                index === self.findIndex((i) => i.tenantId === item.tenantId)
            );
          });
          dispatch(setLoading(false));
        } else {
          setDirectoryListing(response.directoryList);
          dispatch(setLoading(false));
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sortingOption, tenentId]
  );

  const constructRequestData = (offset = 0): RequestData => {
    const requestData: RequestData = {
      limit: fixedPageLimit || 24,
      offset,
    };

    if (sortingOption) {
      requestData.ordering = sortingOption.value;
    }

    if (tenentId) {
      requestData.tenantId = tenentId;
    }

    if (filters) {
      const filters = JSON.parse(localStorage.getItem("filters") || "{}");
      const cleanedFilters = Object.fromEntries(
        Object.entries(filters).filter(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_, value]) => !Array.isArray(value) || value.length > 0
        )
      );
      requestData.filters = cleanedFilters;
    }

    return requestData;
  };

  const viewMoreClicked = () => { 
    const listing = JSON.parse(
      localStorage.getItem("directoryListing") || "[]"
    );
    const totalItems =  Number(localStorage.getItem("totalItems"));
    if (totalItems && listing.length < (totalItems || 0)) {
      dispatch(setLoading(true));
      const offset = listing?.length || 0;
      const requestData = constructRequestData(offset);
      requestData.limit = 24;
      getAllDirectoryListing(requestData, "loadMore");
    }else{
      dispatch(setLoading(false));
    }
  };

  const debounceFetchMore = (
    func: (el: HTMLElement | null) => void,
    delay: number
  ): ((el: HTMLElement | null) => void) => {
    let timerId: ReturnType<typeof setTimeout>;
    return (el: HTMLElement | null) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => func(el), delay);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMoreOnBottomReached = useCallback(
    debounceFetchMore((containerRefElement: HTMLElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (
          scrollHeight - scrollTop - clientHeight < 1200 &&
          directoryListing.length < (totalItems || 0)
        ) {
          viewMoreClicked();
        }
      }
    }, 300),
    [totalItems, directoryListing]
  );

  const getSelectedCurrencyObj = (currencyCode = "USD") => {
    const obj = currenciesList.find((x) => x.code === currencyCode);
    return obj;
  };

  const getCurrency = () => {
    const currencyObj = localStorage.getItem("currency");
    if (currencyObj) {
      return JSON.parse(currencyObj);
    }
    const obj = getSelectedCurrencyObj();
    return obj;
  };

  useEffect(() => {
    const hasAnyFilter = Object.values(filters).some(
      (values) => values.length > 0
    );
    setIsFilterSelected(hasAnyFilter);
  }, [filters]);

  useEffect(() => {
    setDirectoryListing([...directoryListingList]);
    dispatch(setItems([...directoryListingList]));
    //   localStorage.setItem('directoryListing', JSON.stringify(directoryListingList));
  }, [directoryListingList, dispatch]);

  useEffect(() => {
    if (directoryListing.length > 0|| isFilterSelected) {
      dispatch(setItems([...directoryListing]));
      localStorage.setItem(
        "directoryListing",
        JSON.stringify(directoryListing)
      );
    } else {
      if(!isFilterSelected){
        dispatch(setItems([...directoryListingList]));
        localStorage.setItem(
          "directoryListing",
          JSON.stringify(directoryListingList)
        );
      }
    }
  }, [directoryListing, directoryListingList, dispatch, isFilterSelected]);

  useEffect(() => {
    setDirectoryListing([]);
    const requestData = constructRequestData(0);
    requestData.limit = 24;
    getAllDirectoryListing(requestData, "initial");
    localStorage.setItem("filters", JSON.stringify(filters));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortingOption, filters]);

  useEffect(() => {
    localStorage.setItem("totalItems", totalItems.toString());
  }, [totalItems]);

  return {
    directoryListing,
    fetchSearchResults,
    searchResults,
    searchListLoading,
    updateSort,
    fetchMoreOnBottomReached,
    viewMoreClicked, 
    // router,
  };
};
