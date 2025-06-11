"use client";

import {
  DirectoryListItem,
  FeaturedDirectoryItem,
  PartnerTireItem,
} from "@/lib/types/featuredList";
import { Box, Card, Flex, HStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Rating from "../rating/Retting";
import { ServerImageWithFallback as ServerImage } from "../../../ui-components/Image/ServerImage";
import { brandName } from "@/lib/utils/constantValues";
import CheckVerifiedIcon from "../../../../../images/check-verified.svg";
import fallbackImage from "../../../../../images/fallbackImage.png";
import "swiper/css";
import { useRouter, useSearchParams } from "next/navigation";
import { ColorMapping } from "@/lib/types/theme";
import { Tooltip } from "@/app/components/ui-components/Tooltip/Tooltip";

interface Props {
  featuredList: FeaturedDirectoryItem[];
  partnerTierList: PartnerTireItem[];
  directoryListingList: DirectoryListItem[];
  subDomain?: boolean;
  colorData?: ColorMapping;
  pageType?: string;
}

export default function FeaturedList({
  featuredList,
  partnerTierList,
  directoryListingList,
  subDomain,
  colorData,
  pageType,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  if (!featuredList?.length) return null;

  const openDetailPage = (slug: string) => {
    const isDemoData = searchParams.get("isDemoData") === "true";

    const url = `/directory-detail/${slug}`;

    const query = new URLSearchParams();

    if (pageType) query.append("provider", pageType);
    if (isDemoData) query.append("isDemoData", "true");

    const finalUrl = `${url}?${query.toString()}`;
    router.push(finalUrl);
  };

  return (
    <Box>
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="grid-swiper"
      >
        {featuredList.map((directory) => {
          const avgRating = directory?.review?.avg ?? 0;
          const numberOfReviews = directory?.review?.numberOfReview ?? 0;
          // const decodedDetails = he.decode(directory?.companyDetails ?? "");
          const decodedDetails = directory?.companyDetails ?? "";

          return (
            <SwiperSlide key={directory.tenantId}>
              <Card.Root
                key={directory.tenantId}
                variant={"outline"}
                size="md"
                id="dirListCard"
                onClick={() =>
                  openDetailPage(directory.slug || directory.tenantId)
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
                      align="center"
                      justify="center"
                      h="120px"
                      p="20px"
                      w="100%"
                      mb="20px"
                      bg="#F9FAFB"
                      borderRadius="8px"
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
                          color={subDomain ? colorData?.title : "#111A29"}
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
                      fontWeight="400"
                      overflow="hidden"
                      flexGrow={1}
                      h="105px"
                    >
                      <Box
                        fontSize="12px"
                        color={subDomain ? colorData?.bodyText : "#7E8792"}
                        className="cb-dir-paragraph"
                      >
                        {decodedDetails.length > 130
                          ? decodedDetails.slice(0, 130) + "..."
                          : decodedDetails}
                      </Box>
                    </Box>

                    <HStack mt="10px !important">
                      <Rating
                        rating={parseFloat(avgRating.toFixed(1))}
                        starSize="12px"
                      />
                      <Box color="#111A29" fontSize="14px">
                        {avgRating.toFixed(1)}
                      </Box>
                      <Box color="#5E6977" fontSize="14px">
                        ({numberOfReviews})
                      </Box>
                    </HStack>
                  </Flex>
                </Card.Body>
              </Card.Root>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
