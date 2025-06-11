"use client";

import { useEffect } from "react";
import { debounce } from "lodash";
import { DirectoryListItem } from "@/lib/types/featuredList";
import { useDirectoryListing } from "../directory/useDirectoryListing";
import { RootState, useAppDispatch } from "@/lib/redux/store";
import {
  setLoading,
  setTotalItems,
} from "@/lib/redux/slices/directoryListingSlice";
import { useSelector } from "react-redux";

interface ScrollHandlerProps {
  directoryListingList: DirectoryListItem[];
  totalItems: number;
  fixedPageLimit: number;
  tenentId?: string;
  children: React.ReactNode;
}

const ScrollHandler = ({
  directoryListingList,
  totalItems,
  fixedPageLimit,
  tenentId,
  children,
}: ScrollHandlerProps) => {
  const total = useSelector(
    (state: RootState) => state.directoryListing.totalItems
  );
  const { viewMoreClicked } = useDirectoryListing({
    directoryListingList,
    totalItems: total,
    fixedPageLimit,
    tenentId,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollHeight - scrollTop - clientHeight < 1200) {
        viewMoreClicked();
      } else {
        dispatch(setLoading(false));
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (total === 0) {
      dispatch(setTotalItems(totalItems));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, totalItems]);
  return <div>{children}</div>;
};

export default ScrollHandler;
