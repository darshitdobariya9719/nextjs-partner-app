"use client";

import {
  Box,
  Center,
  Flex,
  HStack,
  Input,
  InputGroup,
  Popover,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ImageWithFallback as Image } from "../../../ui-components/Image/Image";
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import Select from "react-select";
import { useDebounce } from "use-debounce";
import { DirectoryListItem } from "@/lib/types/featuredList";
import "./searchBar.css";

interface SortingOption {
  value: string;
  label: string;
}

interface Props {
  sortingOptions: SortingOption[];
  globalSearchResults: DirectoryListItem[];
  searchListLoading: boolean;
  subdomain?: boolean;
  onSearch: (query: string) => void;
  onSortChange: (option: SortingOption | null) => void;
  onItemClick: (slug: string) => void;
}

export default function SearchBar({
  sortingOptions,
  globalSearchResults,
  searchListLoading,
  subdomain,
  onSearch,
  onSortChange,
  onItemClick,
}: Props) {
  const { open, onToggle, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const [globalSearchTerm, setGlobalSearchTerm] = useState("");
  const [selectedSortingOption, setSelectedSortingOption] =
    useState<SortingOption | null>(null);
  const [debouncedSearchValue] = useDebounce(searchTerm, 400);

  useEffect(() => {
    if (debouncedSearchValue && debouncedSearchValue.length >= 3) {
      onSearch(debouncedSearchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length >= 3) {
      if (!open) onToggle();
    } else {
      if (open) onClose();
    }
  };

  const handleEnterKeySearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
      onClose();
      setGlobalSearchTerm(searchTerm);
    }
  };

  const handleSearchBlur = () => {
    if (searchTerm === "") setSearchTerm(globalSearchTerm);
    onClose();
  };

  const handleSearchFocus = () => {
    if (debouncedSearchValue && debouncedSearchValue.length >= 3) {
      if (!open) onToggle();
    }
  };

  const handleClearSearch = () => {
    setGlobalSearchTerm("");
    setSearchTerm("");
    onClose();
  };
  return (
    <Flex
      gap={3}
      mb={6}
      width={"100%"}
      position="relative"
      flexDir={{ base: "column", lg: "row" }}
    >
      <Popover.Root
        open={open}
        onClose={onClose}
        placement="bottom"
        autoFocus={false}
      >
        <Box width={"100%"}>
          <Popover.Trigger>
            <InputGroup
              startElement={<FaSearch size={16} color="#9EA5AD" />}
              endElement={
                searchTerm && (
                  <IoCloseSharp
                    size={24}
                    color={"#9EA5AD"}
                    onClick={handleClearSearch}
                  />
                )
              }
            >
              <Input
                type="text"
                placeholder="Search by name, services or phrases..."
                maxH="38px"
                onChange={handleSearch}
                onKeyDown={handleEnterKeySearch}
                onBlur={handleSearchBlur}
                onFocus={handleSearchFocus}
                value={searchTerm}
                _focus={{
                  borderColor: "#0C94AC !important",
                  boxShadow: "none",
                }}
              />
            </InputGroup>
          </Popover.Trigger>

          <Popover.Content>
            <Popover.Body>
              {searchListLoading ? (
                <Center minH="100px">
                  {/* <Box animation={`${spin} 1s linear infinite`}>
                 
                </Box> */}
                </Center>
              ) : globalSearchResults?.length > 0 ? (
                globalSearchResults.map((data) => (
                  <HStack
                    key={data?.slug || data?.tenantId}
                    _hover={{ bg: "gray.50" }}
                    p={2}
                    gap={2}
                    cursor="pointer"
                    onMouseDown={(e) => {
                      if (e.buttons === 1)
                        onItemClick(data.slug || data.tenantId);
                    }}
                  >
                    <Image
                      src={data.logo}
                      alt={data.companyName}
                      width={48}
                      height={48}
                      fallback={""}
                    />
                    <VStack align="start" gap={0}>
                      <Box fontWeight="bold" fontSize="16px">
                        {data.companyName}
                      </Box>
                      <Box fontSize="14px" color="gray.600">
                        {/* {data.companyDetails
                        ? he.decode(data.companyDetails).slice(0, 130) +
                          (he.decode(data.companyDetails).length > 130
                            ? "..."
                            : "")
                        : ""} */}
                        {data.companyDetails
                          ? data.companyDetails.slice(0, 130) +
                            (data.companyDetails.length > 130 ? "..." : "")
                          : ""}
                      </Box>
                    </VStack>
                  </HStack>
                ))
              ) : (
                <Center minH="100px" bg="#F9FCFF" rounded="8px">
                  <Box fontSize="16px" fontWeight={500}>
                    No results found. Try a different word or phrase.
                  </Box>
                </Center>
              )}
            </Popover.Body>
          </Popover.Content>
        </Box>
      </Popover.Root>

      <Box w={{ base: "100%", lg: "194px" }}>
        <Select
          name="sorting"
          placeholder={
            <HStack fontSize="14px" fontWeight={500}>
              <Box color="#9EA5AD">Sort by:</Box>
              <Box color="#111A29">Reviews</Box>
            </HStack>
          }
          options={
            subdomain
              ? sortingOptions
              : sortingOptions.filter((opt) => opt.label !== "Tier")
          }
          value={selectedSortingOption}
          onChange={(option) => {
            setSelectedSortingOption(option);
            onSortChange(option);
          }}
          isClearable
          classNamePrefix="react-select"
        />
      </Box>
    </Flex>
  );
}
