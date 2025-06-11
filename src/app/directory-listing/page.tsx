import api from "@/lib/axiosClient";
import { CustomThemeResponse, matchmakingCardData } from "@/lib/types/theme";
import {
  FeaturedListResponse,
  PartnerTireListResponse,
  DirectoryListResponse, // Create this if not already
} from "@/lib/types/featuredList";
import { getRequestDomainData } from "@/lib/utils/domainUtils";
import { Box, Center } from "@chakra-ui/react";
import ScrollHandler from "../components/features/scroll-handler/ScrollHandler";
import Header from "../components/features/header/Header";
import Banner from "../components/features/banner/Banner";
import FeaturedList from "../components/features/directory/featuredlist/FeaturedList";
import DirectoryListing from "../components/features/directory/DirectoryListing";
import Footer from "../components/features/footer/Footer";
import { domainsToHideSearchFor } from "@/lib/utils/constantValues";

interface DirectoryListingPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  searchParams,
}: DirectoryListingPageProps) {
  const params = await searchParams;
  const provider = Array.isArray(params?.provider)
    ? params?.provider[0]
    : params?.provider;
  const faviconUrl = process.env.NEXT_PUBLIC_FAVICON_URL || undefined;

  const requestDomainData = await getRequestDomainData(provider);

  let themeData: CustomThemeResponse | null = null;

  if (requestDomainData?.slug || requestDomainData?.subDomain) {
    const themeRes = await api.post<CustomThemeResponse>(
      "/sp/setup/customTheme",
      requestDomainData
    );
    themeData = themeRes?.data || null;
  }

  const title = themeData?.companyName || "Partner Directory";
  const faviconUrlFromTheme = themeData?.urls?.favIcon || faviconUrl;
  const icons = {
    icon: faviconUrlFromTheme,
  };

  return {
    title,
    description:
      "Explore our partner directory to find the best solutions for your needs.",
    icons,
  };
}

export default async function DirectoryListingPage({
  searchParams,
}: DirectoryListingPageProps) {
  const params = await searchParams;
  const provider = Array.isArray(params?.provider)
    ? params?.provider[0]
    : params?.provider;

  const pageType = "directory-listing";
  const fixedPageLimit = 24;

  let themeData: CustomThemeResponse | null = null;
  let featuredData: FeaturedListResponse | null = null;
  let partnerTierListData: PartnerTireListResponse | null = null;
  let directoryListData: DirectoryListResponse | null = null;
  let matchmakingRes: matchmakingCardData | undefined;
  let pageStatusRes: { page: string; status: string }[] | null = null;
  let isVisibleMatchMakingCard: boolean = true;

  const requestDomainData = await getRequestDomainData(provider);

  try {
    // Theme setup
    if (requestDomainData?.slug || requestDomainData?.subDomain) {
      const themeRes = await api.post<CustomThemeResponse>(
        "/sp/setup/customTheme",
        requestDomainData
      );
      themeData = themeRes?.data || null;
    }

    // Fetch Featured List + Tier List + Directory List
    if (themeData?.tenantId) {
      pageStatusRes = themeData?.pageStatus;

      matchmakingRes = themeData?.["directory-listing"]?.find(
        (item) => item?.section === "matchmakingCard"
      )?.customMapping;

      isVisibleMatchMakingCard = matchmakingRes?.hasOwnProperty(
        "matchMakingRequestBtnChecked"
      )
        ? Boolean(matchmakingRes?.matchMakingRequestBtnChecked)
        : true;

      const limit =
        (pageType || requestDomainData?.subDomain) &&
        matchmakingRes &&
        isVisibleMatchMakingCard &&
        Object.keys(matchmakingRes)?.length > 0 &&
        pageStatusRes?.find((item) => item?.page === "service-request")
          ?.status === "published"
          ? fixedPageLimit - 1
          : fixedPageLimit;

      const [featuredRes, partnerTierRes, directoryListRes] = await Promise.all(
        [
          api.post<FeaturedListResponse>("/sc/directory/featuredList", {
            tenantId: themeData.tenantId,
          }),
          api.get<PartnerTireListResponse>(
            `/sc/setting/tier/getTiersById?tenantId=${themeData.tenantId}`
          ),
          api.post<DirectoryListResponse>("/sc/directory/list/v1", {
            limit: limit,
            offset: 0,
            // tenantId: themeData.tenantId,
            tenantId:
              requestDomainData?.subDomain ===
              process.env.NEXT_PUBLIC_STACK_PLAN_PARTNER_DIRECTORY_SUBDOMAIN
                ? process.env.REACT_APP_STACK_PLAN_ADMIN_TENANTID
                : themeData?.tenantId,
            currencyCode: "INR",
          }),
        ]
      );

      featuredData = featuredRes.data;
      partnerTierListData = partnerTierRes.data;
      directoryListData = directoryListRes.data;
    } else {
      const limit = fixedPageLimit;

      const [directoryListRes] = await Promise.all([
        api.post<DirectoryListResponse>("/sc/directory/list/v1", {
          limit: limit,
          offset: 0,
          currencyCode: "INR",
        }),
      ]);
      directoryListData = directoryListRes.data;
    }
  } catch (err) {
    console.error("API fetch failed:", err);
    return <Center py={5}>Error loading data</Center>;
  }

  const headerHtml =
    themeData?.["header-footer"]?.find((item) => item.section === "header")
      ?.customMapping || "";

  const bannerRes = themeData?.["directory-listing"]?.find(
    (item) => item.section === "banner"
  )?.customMapping;

  const colorData = themeData?.["theme-setting"]?.find(
    (item) => item?.section === "colors"
  )?.customMapping;

  const filterData = themeData?.["directory-listing"]?.find(
    (item) => item?.section === "filter"
  )?.filterMapping;

  const footerHtml =
    themeData?.["header-footer"]?.find((item) => item.section === "footer")
      ?.customMapping || "";

  const shouldShowStaticHeader =
    process.env.NEXT_PUBLIC_DISPLAY_STATIC_HEADERFOOTER === "true";

  if ((requestDomainData?.slug || requestDomainData?.subDomain) && !themeData) {
    return (
      <Center py={5} fontSize="30px">
        No data found.
      </Center>
    );
  }

  return (
    <ScrollHandler
      directoryListingList={directoryListData?.directoryList || []}
      totalItems={directoryListData?.total || 0}
      fixedPageLimit={fixedPageLimit}
      tenentId={
        requestDomainData?.subDomain ===
        process.env.NEXT_PUBLIC_STACK_PLAN_PARTNER_DIRECTORY_SUBDOMAIN
          ? process.env.REACT_APP_STACK_PLAN_ADMIN_TENANTID
          : themeData?.tenantId
      }
    >
      <div>
        <Box>
          <Header
            html={headerHtml}
            isStatic={
              !(requestDomainData?.slug || requestDomainData?.subDomain) &&
              shouldShowStaticHeader
            }
          />
        </Box>

        <Box>
          <Banner
            data={bannerRes}
            isStatic={
              !(requestDomainData?.slug || requestDomainData?.subDomain)
            }
            pageStatus={themeData?.pageStatus || []}
            pageType="directory-listing"
          />
        </Box>

        <Box maxW={"1370px"} mx="auto" pt={"40px"} pb={"42px"} px={"15px"}>
          <FeaturedList
            featuredList={featuredData?.directoryList || []}
            partnerTierList={partnerTierListData?.partnerTierList || []}
            directoryListingList={directoryListData?.directoryList || []}
            subDomain={
              requestDomainData?.slug || requestDomainData?.subDomain
                ? true
                : false
            }
            colorData={colorData}
            pageType="directory-listing"
          />
          <DirectoryListing
            isSearch={
              !domainsToHideSearchFor?.includes(
                requestDomainData?.subDomain || ""
              )
            }
            subDomain={
              requestDomainData?.slug || requestDomainData?.subDomain
                ? true
                : false
            }
            filterData={filterData}
            directoryListingList={directoryListData?.directoryList || []}
            totalItems={directoryListData?.total || 0}
            matchmakingRes={matchmakingRes}
            isVisibleMatchMakingCard={isVisibleMatchMakingCard}
            pageStatusRes={themeData?.pageStatus || []}
            colorsData={colorData}
            partnerTierList={partnerTierListData?.partnerTierList || []}
            pageType="directory-listing"
            fixedPageLimit={fixedPageLimit}
            tenentId={
              requestDomainData?.subDomain ===
              process.env.NEXT_PUBLIC_STACK_PLAN_PARTNER_DIRECTORY_SUBDOMAIN
                ? process.env.REACT_APP_STACK_PLAN_ADMIN_TENANTID
                : themeData?.tenantId
            }
          />
        </Box>
        <Box>
          <Footer
            html={footerHtml}
            isStatic={
              !(requestDomainData?.slug || requestDomainData?.subDomain) &&
              shouldShowStaticHeader
            }
          />
        </Box>
      </div>
    </ScrollHandler>
  );
}
