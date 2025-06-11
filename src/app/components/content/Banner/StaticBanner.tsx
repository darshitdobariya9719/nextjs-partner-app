import { brandName, stdFontWeight } from "@/lib/utils/constantValues";
import { Box, VStack } from "@chakra-ui/react";
import React from "react";

export default function StaticBanner() {
  return (
    <Box backgroundColor="#1C2C44" id="dirListBanner">
      <VStack gap="8" maxW={"1370px"}>
        <Box
          fontSize={["30px", "30px", "36px"]}
          color={"#FFFFFF"}
          id="dirListBannerTitle"
        >
          {brandName} Software Consultant Directory
        </Box>
        <Box
          fontSize={["14px", "14px", "16px"]}
          color={"#fff"}
          fontWeight={stdFontWeight}
          id="dirListBannerSubTitle"
        >
          Connect with vetted, top-ranked software consultants to execute your
          software integration and implementation projects
        </Box>
      </VStack>
    </Box>
  );
}
