"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DirectoryListItem, PartnerTireItem } from "@/lib/types/featuredList";
import { ColorMapping, matchmakingCardData } from "@/lib/types/theme";
import { brandName, stdFontWeight } from "@/lib/utils/constantValues";
import { Box, Card, Flex, HStack, Link, SimpleGrid } from "@chakra-ui/react";
import { ServerImageWithFallback as ServerImage } from "../../ui-components/Image/ServerImage";
import fallbackImage from "../../../../images/fallbackImage.png";
import { Tooltip } from "../../ui-components/Tooltip/Tooltip";
import CheckVerifiedIcon from "../../../../images/check-verified.svg";
import Rating from "./rating/Retting";

interface props {
  directoryListingList: DirectoryListItem[];
  matchmakingCardData?: matchmakingCardData;
  isVisibleMatchMakingCard?: boolean;
  subDomain: boolean;
  pageStatus: { page: string; status: string }[];
  colorsData?: ColorMapping;
  partnerTierList: PartnerTireItem[];
  pageType: string;
}

export default function Listing({
  directoryListingList,
  matchmakingCardData,
  isVisibleMatchMakingCard,
  subDomain,
  pageStatus,
  colorsData,
  partnerTierList,
  pageType,
}: props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const openDetailPage = (slug: string) => {
    const isDemoData = searchParams.get("isDemoData") === "true";
    const url = `/directory-detail/${slug}`;
    const query = new URLSearchParams();
    // const provider = searchParams.get('provider');
    // if (provider) query.append("provider", provider);
    if (isDemoData) query.append("isDemoData", "true");
    const finalUrl = !query.toString() ? url : `${url}?${query.toString()}`;
    router.push(finalUrl);
  };

  const handleClick = () => {
    // if (pageType) {
    //   router.push(`/service-request-page?provider=${pageType}`);
    // } else
    if (subDomain) {
      router.push("/service-request-page");
    } else {
      window.location.href =
        "https://coachbar.io/get-started-for-business-leaders/";
    }
  };

  return (
    <SimpleGrid gap={"24px"} columns={[1, 2, 3, 3, 4]} mt={"40px"}>
      {(subDomain || pageType) &&
        matchmakingCardData &&
        isVisibleMatchMakingCard &&
        Object.keys(matchmakingCardData)?.length &&
        pageStatus?.find((item) => item?.page === "service-request")?.status ===
          "published" && (
          <Card.Root
            variant={"outline"}
            size="md"
            id="dirListCard"
            _hover={{
              border: "1px solid #9ED4DE",
            }}
          >
            <Card.Body>
              <Flex direction={"column"} h={"100%"}>
                <Box
                  color={subDomain || pageType ? colorsData?.title : "#111A29"}
                  fontSize="16px"
                  fontWeight="700"
                  fontStyle="normal"
                  mb={"10px !important"}
                  className="cb-dir-heading-5"
                >
                  {subDomain || pageType
                    ? matchmakingCardData?.title
                    : "Let us guide you"}
                </Box>
                <Box
                  flexGrow={1}
                  color={
                    subDomain || pageType ? colorsData?.bodyText : "#7E8792"
                  }
                  fontSize="16px"
                  fontWeight={stdFontWeight}
                  className="cb-dir-paragraph"
                >
                  {subDomain || pageType
                    ? matchmakingCardData?.subTitle
                    : "to discover the ideal partner to elevate your business success"}
                </Box>
                {(subDomain || pageType) && matchmakingCardData?.img ? (
                  <ServerImage
                    src={matchmakingCardData?.img}
                    alt="Company Logo"
                    width={160}
                    height={100}
                    style={{ objectFit: "contain", maxHeight: "100%" }}
                    fallback={fallbackImage}
                  />
                ) : (
                  <ServerImage
                    src={fallbackImage}
                    alt="Company Logo"
                    width={100}
                    height={100}
                    style={{ objectFit: "contain", maxHeight: "100%" }}
                    fallback={fallbackImage}
                  />
                )}
                {(subDomain || pageType) && matchmakingCardData?.partner && (
                  <Box color={"#111A29"} fontSize="14px" fontWeight="500">
                    {matchmakingCardData?.partner}
                  </Box>
                )}
                {(subDomain || pageType) &&
                  matchmakingCardData?.partnerDescription && (
                    <Box
                      color={"#5E6977"}
                      fontSize="12px"
                      fontWeight={stdFontWeight}
                      mb={"40px !important"}
                    >
                      {matchmakingCardData?.partnerDescription}
                    </Box>
                  )}
                <Link
                  target={subDomain ? "" : "_blank"}
                  bg={subDomain ? matchmakingCardData?.btnBgColor : "#0C94AC"}
                  fontSize={"14px"}
                  color={
                    subDomain || pageType
                      ? matchmakingCardData?.btnTextColor
                      : "#fff"
                  }
                  fontWeight={500}
                  _hover={{
                    bg:
                      subDomain || pageType
                        ? matchmakingCardData?.btnBgColor
                        : "#0C94AC",
                  }}
                  p="10px 16px"
                  onClick={handleClick}
                  textAlign={"center"}
                  borderRadius={"5px"}
                >
                  {subDomain || pageType
                    ? matchmakingCardData?.btnText
                    : "Get Matched"}
                </Link>
              </Flex>
            </Card.Body>
          </Card.Root>
        )}

      {directoryListingList &&
        directoryListingList.length &&
        directoryListingList.map((directory) => {
          return (
            <Card.Root
              key={directory.tenantId}
              variant={"outline"}
              size="md"
              id="dirListCard"
              onClick={() =>
                openDetailPage(
                  directory.slug ? directory.slug : directory.tenantId
                )
              }
              _hover={{
                border: "1px solid #9ED4DE",
              }}
            >
              <Card.Body>
                <Flex direction={"column"} h={"100%"}>
                  {subDomain &&
                    partnerTierList?.length > 0 &&
                    directoryListingList.some((item) =>
                      item.hasOwnProperty("tier")
                    ) && (
                      <Box
                        color={"#5E6977"}
                        fontWeight={700}
                        fontSize={"12px"}
                        textTransform={"uppercase"}
                        mb={"20px !important"}
                        h={"18px"}
                      >
                        {
                          partnerTierList?.find(
                            (item) => item.id === directory.tier
                          )?.title
                        }
                      </Box>
                    )}
                  <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    h={"120px"}
                    p={"20px"}
                    w={"100%"}
                    mb={"20px"}
                    bg={"#F9FAFB"}
                    borderRadius={"8px"}
                  >
                    {directory.logo ? (
                      <ServerImage
                        src={directory.logo}
                        alt="Company Logo"
                        width={160}
                        height={100}
                        style={{ objectFit: "contain", maxHeight: "100%" }}
                        fallback={fallbackImage}
                      />
                    ) : (
                      <ServerImage
                        src={fallbackImage}
                        alt="Company Logo"
                        width={100}
                        height={100}
                        style={{ objectFit: "contain", maxHeight: "100%" }}
                        fallback={fallbackImage}
                      />
                    )}
                  </Flex>
                  <Flex mb="12px">
                    {directory.companyName?.length > 30 ? (
                      <Tooltip content={directory.companyName} interactive>
                        <Box
                          fontSize="16px"
                          fontWeight="700"
                          className="cb-dir-heading-5"
                        >
                          {directory.companyName?.length > 30
                            ? directory.companyName.slice(0, 30) + "..."
                            : directory.companyName}
                        </Box>
                      </Tooltip>
                    ) : (
                      <Box
                        color={subDomain ? colorsData?.title : "#111A29"}
                        fontSize="16px"
                        fontWeight="700"
                        fontStyle="normal"
                        className="cb-dir-heading-5"
                      >
                        {directory.companyName}
                      </Box>
                    )}
                    <Tooltip content={`${brandName} Verified`} interactive>
                      <Box ml={2}>
                        <ServerImage
                          src={CheckVerifiedIcon}
                          fallback={fallbackImage}
                          alt="Verified"
                          width={20}
                          height={20}
                        />
                      </Box>
                    </Tooltip>
                  </Flex>
                  <Box
                    fontSize="16px"
                    fontWeight={stdFontWeight}
                    fontStyle="normal"
                    overflow="hidden"
                    flexGrow={1}
                    // className="company-profile-custom"
                    h={"105px"}
                  >
                    {/* {directory?.companyDetails ? (
                        he.decode(directory?.companyDetails)?.length > 130 ? (
                          <Box
                            color={subDomain ? colorsData?.bodyText : "#7E8792"}
                            fontSize={"12px"}
                            className="cb-dir-paragraph"
                          >
                            {he
                              .decode(directory?.companyDetails)
                              ?.slice(0, 130)}
                            ...
                          </Box>
                        ) : (
                          <Box
                            color={subDomain ? colorsData?.bodyText : "#7E8792"}
                            fontSize={"12px"}
                            className="cb-dir-paragraph"
                          >
                            {he.decode(directory?.companyDetails)}
                          </Box>
                        )
                      ) : (
                        ""
                      )} */}
                    {directory?.companyDetails ? (
                      directory?.companyDetails?.length > 130 ? (
                        <Box
                          color={subDomain ? colorsData?.bodyText : "#7E8792"}
                          fontSize={"12px"}
                          className="cb-dir-paragraph"
                        >
                          {directory?.companyDetails?.slice(0, 130)}
                          ...
                        </Box>
                      ) : (
                        <Box
                          color={subDomain ? colorsData?.bodyText : "#7E8792"}
                          fontSize={"12px"}
                          className="cb-dir-paragraph"
                        >
                          {directory?.companyDetails}
                        </Box>
                      )
                    ) : (
                      ""
                    )}
                  </Box>
                  <HStack mt="10px !important">
                    <Rating
                      rating={parseFloat(
                        directory?.review && directory?.review.avg
                          ? directory?.review.avg.toFixed(1)
                          : "0"
                      )}
                      starSize="12px"
                    />
                    <Box color="#111A29" fontSize="14px">
                      {directory?.review && directory?.review.avg
                        ? directory?.review.avg.toFixed(1)
                        : 0}
                    </Box>
                    <Box color="#5E6977" fontSize="14px">
                      (
                      {directory?.review && directory?.review.numberOfReview
                        ? directory?.review.numberOfReview
                        : "0"}
                      )
                    </Box>
                  </HStack>
                </Flex>
              </Card.Body>
            </Card.Root>
          );
        })}
    </SimpleGrid>
  );
}
