"use client";

import React, { useEffect, useState } from "react";
import Listing from "./Listing";
import { DirectoryListItem, PartnerTireItem } from "@/lib/types/featuredList";
import {
  FilterMapping,
  ColorMapping,
  matchmakingCardData,
} from "@/lib/types/theme";
import { sortingOptions } from "@/lib/utils/listingConstant";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/lib/redux/store";
import { useDirectoryListing } from "./useDirectoryListing";
import SearchBar from "./Search/SearchBar";
import Filter from "./filter/Filter";
import { FilterOptions } from "@/lib/utils/constantValues";
import Loader from "../../ui-components/Loaders/Loader";
import { setTotalItems } from "@/lib/redux/slices/directoryListingSlice";
import { useRouter } from "next/navigation";

interface Props {
  isSearch: boolean;
  subDomain: boolean;
  filterData?: FilterMapping[];
  directoryListingList: DirectoryListItem[];
  matchmakingRes?: matchmakingCardData;
  isVisibleMatchMakingCard: boolean;
  pageStatusRes: { page: string; status: string }[];
  colorsData?: ColorMapping;
  partnerTierList: PartnerTireItem[];
  pageType: string;
  totalItems: number;
  fixedPageLimit: number;
  tenentId?: string;
}


export default function DirectoryListing(props: Props) {
  const { filterData } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const total = useSelector((state: RootState) => state.directoryListing.totalItems);
  const {
    fetchSearchResults,
    searchResults,
    searchListLoading,
    updateSort,
  } = useDirectoryListing({
    directoryListingList: props.directoryListingList,
    totalItems:  total,
    fixedPageLimit: props.fixedPageLimit,
    tenentId: props.tenentId,
  });
  const filters = useSelector((state: RootState) => state.filters);
  const directoryListing = useSelector(
    (state: RootState) => state.directoryListing.items
  );
  const loading = useSelector(
    (state: RootState) => state.directoryListing.loading
  );

  const [isFilterSelected, setIsFilterSelected] = useState(false);


  useEffect(() => {
      const hasAnyFilter = Object.values(filters).some(
        (values) => values.length > 0
      );
      setIsFilterSelected(hasAnyFilter);
    }, [filters]);

    useEffect(() => {
        if(total===0){
          dispatch(setTotalItems(props.totalItems));
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[dispatch, props.totalItems])

  return (
    <div>
      {props.isSearch && (
        <SearchBar
          sortingOptions={sortingOptions}
          globalSearchResults={searchResults}
          searchListLoading={searchListLoading}
          subdomain={props.subDomain}
          onSearch={fetchSearchResults}
          onSortChange={updateSort}
          onItemClick={(slug) => router.push(`/directory-detail/${slug}`)}
        />
      )}
      {((filterData && filterData.length > 0) || !props.subDomain) && (
        <Filter data={filterData||FilterOptions} subdomain={props.subDomain} tenentId={props.tenentId} />
      )}

      {directoryListing.length > 0 ? (
        <Listing
          directoryListingList={directoryListing}
          subDomain={props.subDomain}
          matchmakingCardData={props.matchmakingRes}
          isVisibleMatchMakingCard={props.isVisibleMatchMakingCard}
          pageStatus={props.pageStatusRes}
          colorsData={props.colorsData}
          partnerTierList={props.partnerTierList}
          pageType={props.pageType}
        />
      ) : props.directoryListingList.length > 0 && !isFilterSelected ? (
        <Listing
          directoryListingList={props.directoryListingList}
          subDomain={props.subDomain}
          matchmakingCardData={props.matchmakingRes}
          isVisibleMatchMakingCard={props.isVisibleMatchMakingCard}
          pageStatus={props.pageStatusRes}
          colorsData={props.colorsData}
          partnerTierList={props.partnerTierList}
          pageType={props.pageType}
        />
      ) : null}

      {loading && <Loader color="#0e859d" />}
    </div>
  );
}
