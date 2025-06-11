"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import ReactCountryFlag from "react-country-flag";

const CountryFlag = ({
  countryCode,
  country,
}: {
  countryCode: string;
  country: string;
}) => {
  if (!countryCode) return null;

  return (
    <Box>
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{
          width: "20px",
          marginRight: "8px",
          height: "20px",
          borderRadius: "2px",
          objectFit: "cover",
        }}
        title={country}
      />
      {country}
    </Box>
  );
};

export default CountryFlag;
