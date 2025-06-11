"use client";

import React, { useEffect, useState } from "react";
import Select, {
  components,
  MultiValue as MultiValueType,
  ValueContainerProps,
} from "react-select";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useFilters } from "./useFilters";
import { FilterState } from "@/lib/redux/slices/filterSlice";
import CountryFlag from "./CountryFlag";
import FilterBasedIcon from "./FilterBasedIcon";

interface Option {
  label: string | React.ReactNode;
  value: string;
  id?: string;
  iso2?: string;
}

interface CustomFilterProps {
  id: keyof FilterState;
  placeholder: React.ReactNode;
  options: Option[];
}

const MultiValue = () => null;

const ValueContainer = <Option, IsMulti extends boolean = false>({
  children,
  ...props
}: ValueContainerProps<Option, IsMulti>) => {
  const [values, input] = children as React.ReactNode[];
  const valueLength = props.getValue().length;
  const label = valueLength > 0 ? `${valueLength} Selected` : null;

  return (
    <components.ValueContainer {...props}>
      {!props.selectProps.inputValue && values}
      {input}
      {!props.selectProps.inputValue &&
        !props.selectProps?.menuIsOpen &&
        label && (
          <Flex position="absolute" left="8px" alignItems="center" gap="6px">
            <FilterBasedIcon id={`${props.selectProps.instanceId}` || ""} />
            <Text
              color="#111A29"
              fontSize="14px"
              lineHeight="20px"
              fontWeight={500}
              mt={0.5}
            >
              {label}
            </Text>
          </Flex>
        )}
    </components.ValueContainer>
  );
};

export default function CustomFilter({
  id,
  options,
  placeholder,
}: CustomFilterProps) {
  const { filters, updateFilter } = useFilters();
  const [modifiedOptions, setModifiedOptions] = useState<Option[]>(options);

  // const handleChange = (selected: Option | null) => {
  //  updateFilter(id, selected?.value ? [selected.value] : []);
  // };

  const handleChange = (selected: MultiValueType<Option>) => {
    const values = selected ? selected.map((opt) => opt.value) : [];
    updateFilter(id, values);
  };

  // const selectedOption = options?.find((opt) => opt.value === filters[id][0]);
  const selectedOptions = options.filter((opt) =>
    filters[id]?.includes(opt.value)
  );

  useEffect(() => {
    if (id === "countries" && options.some((opt) => opt.iso2)) {
      const modifiedOptions = options.map((opt) => {
        if (opt?.iso2) {
          return {
            ...opt,
            label: (
              <CountryFlag
                countryCode={opt.iso2}
                country={opt.label as string}
              />
            ),
          };
        }
        return opt;
      });

      setModifiedOptions(modifiedOptions); // store it in state and use that in your Select
    } else {
      setModifiedOptions(options); // fallback if not 'countries'
    }
  }, [id, options]);

  return (
    <Box minW="200px">
      <Select
        instanceId={id}
        placeholder={placeholder}
        value={selectedOptions || null}
        options={modifiedOptions}
        onChange={handleChange}
        isMulti
        isClearable
        components={{ MultiValue, ValueContainer }}
        styles={{
          control: (base) => ({
            ...base,
            borderColor: "#CBD5E0",
            boxShadow: "none",
            "&:hover": { borderColor: "#A0AEC0" },
            fontSize: "14px",
          }),
        }}
      />
    </Box>
  );
}
