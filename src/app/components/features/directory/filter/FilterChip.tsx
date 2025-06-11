import { stdFontWeight } from "@/lib/utils/constantValues";
import { Box, Flex, Tag } from "@chakra-ui/react";
import FilterBasedIcon from "./FilterBasedIcon";
import { IoCloseSharp  } from "react-icons/io5";
import { useFilters } from "./useFilters";
import { FilterState } from "@/lib/redux/slices/filterSlice";

const FilterChip = () => {
  const { filters, updateFilter } = useFilters();
  const handleChange = (id: keyof FilterState, value: string) => {
    const selected = filters[id as keyof FilterState].filter(
      (opt) => opt !== value
    );
    updateFilter(id, selected);
  };
  return Object.entries(filters).map(([key, value]) => {
    if (value.length > 0) {
      return value.map((values: string, index: number) => (
        <Tag.Root key={index} borderRadius="full" bg={"#E6E7E9"} py={1} px={4}>
          <Tag.Label
            color={"#111A29"}
            fontSize={"14px"}
            lineHeight={"20px"}
            fontWeight={stdFontWeight}
          >
            <Flex alignItems={"center"} gap={2}>
              <FilterBasedIcon id={key} />
              <Box mt={0.5}>{values}</Box>
            </Flex>
          </Tag.Label>
          <Box
            cursor={"pointer"}
            ml={"8px"}
            opacity={"0.5"}
            _hover={{ opacity: 1 }}
            onClick={() => handleChange(key as keyof FilterState, values)}
          >
            <IoCloseSharp  size={16} />
          </Box>
        </Tag.Root>
      ));
    }
  });
};

export default FilterChip;
