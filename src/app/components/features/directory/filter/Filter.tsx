"use client";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import CustomFilter from "./CustomFilter";
import { FilterState } from "@/lib/redux/slices/filterSlice";
import { useEffect, useState } from "react";
import { FilterMapping } from "@/lib/types/theme";
import { FilterOptions, useFilterOptions } from "./useFilterOptions";
import FilterChip from "./FilterChip";
import { useFilters } from "./useFilters";

interface FilterProps {
  data: FilterMapping[];
  subdomain?: boolean;
  tenentId?: string;
}
export default function Filter({ data, tenentId }: FilterProps) {
  const [placeholders, setPlaceholders] = useState<
    Record<keyof FilterState, string>
  >({} as Record<keyof FilterState, string>);
  const options = useFilterOptions(tenentId || ""); // ✅ Get live dropdown options from Redux
  const { filters, clearAllFilters } = useFilters();
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const getKey = (key: string): keyof FilterState | undefined => {
    switch (key.toLowerCase()) {
      case "country":
        return "countries";
      case "state":
        return "states";
      case "software specialisation":
        return "softwares";
      case "industry":
        return "industries";
      case "service":
        return "services";
      case "project budget":
        return "budget";
      default:
        return undefined;
    }
  };

  useEffect(() => {
    const newPlaceholders = {} as Record<keyof FilterState, string>;
    data.forEach((item) => {
      if (item.isChecked) {
        const key = getKey(item.text.toLowerCase());
        if (key) newPlaceholders[key] = item.name;
      }
    });
    setPlaceholders(newPlaceholders);
  }, [data]);

  useEffect(() => {
    const hasAnyFilter = Object.values(filters).some(
      (values) => values.length > 0
    );
    setIsFilterSelected(hasAnyFilter);
  }, [filters]);

  return (
    <Box>
      <Flex alignItems={"center"} flexWrap={["wrap", "nowrap"]}>
        <Box
          color={"#111A29"}
          fontSize={"14px"}
          lineHeight={"20px"}
          fontWeight={600}
          w={["100%", "auto"]}
          mb={["10px !important", "0 !important"]}
          mr={"24px"}
          whiteSpace={"nowrap"}
          className="cb-dir-heading-6"
        >
          Filter By:
        </Box>
        <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} gap={4}>
          {(Object.keys(placeholders) as (keyof FilterState)[]).map((key) => (
            <CustomFilter
              key={key}
              id={key}
              placeholder={placeholders[key]}
              options={options[key as keyof FilterOptions] || []}
            />
          ))}
        </SimpleGrid>
      </Flex>
      {isFilterSelected && (
        <Flex wrap="wrap" alignItems={"end"} gap={2} mt={6}>
          <FilterChip />
          <Box
            color={"#0C94AC"}
            fontSize={"14px"}
            p={"4px"}
            cursor={"pointer"}
            textDecoration={"underline"}
            onClick={clearAllFilters}
          >
            Clear all
          </Box>
        </Flex>
      )}
    </Box>
  );
}
