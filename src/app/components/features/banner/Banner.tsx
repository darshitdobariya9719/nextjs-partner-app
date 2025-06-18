import { BannerMapping } from "@/lib/types/theme";
import { stdFontWeight } from "@/lib/utils/constantValues";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { default as Button } from "../../ui-components/Buttons/Button";
import StaticBanner from "../../content/Banner/StaticBanner";
// import { useRouter } from "next/navigation";

interface PageStatusItem {
  page: string;
  status: "published" | "draft";
}

interface BannerProps {
  html?: string;
  isStatic: boolean;
  data?: BannerMapping;
  pageStatus: PageStatusItem[];
  pageType?: string;
  provider?: string;
}

export default function Banner({
  html,
  isStatic,
  data,
  pageStatus,
  provider,
}: // pageType,
BannerProps) {
  const partnerEnabled =
    pageStatus.find((item) => item.page === "partner-request")?.status ===
      "published" && data?.partnerRequestBtnChecked;

  const serviceEnabled =
    pageStatus.find((item) => item.page === "service-request")?.status ===
      "published" && data?.serviceRequestBtnChecked;

  return isStatic ? (
    <StaticBanner />
  ) : html ? (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  ) : data ? (
    <Box id="dirListBanner" backgroundColor={data?.bg}>
      <VStack gap={8} maxW={"1370px"}>
        <Box
          id="dirListBannerTitle"
          fontSize={["30px", "30px", "36px"]}
          color={data?.titleColor}
          className="cb-dir-heading-1"
        >
          {data?.title}
        </Box>
        <Box
          id="dirListBannerSubTitle"
          fontSize={["14px", "14px", "16px"]}
          color={data?.subTitleColor}
          fontWeight={stdFontWeight}
          className="cb-dir-paragraph"
        >
          {data?.subTitle}
        </Box>
        <Flex gap={3} flexDir={{ base: "column", lg: "row" }}>
          {partnerEnabled && (
            <Button
              // variant="spThemeOutline"
              isnavlink
              // id="partnerRequestBtn"
              fontSize="14px"
              padding="8px 16px"
              fontWeight={500}
              borderRadius="20px"
              bgColor="transparent"
              // _hover= { color: "cyprus.600", borderColor: "cyprus.600" }
              color={data?.partnerRequestBtnColor}
              border={`2px solid ${data?.partnerRequestBtnColor}`}
              title={data?.partnerRequestBtnTitle}
              href={
                provider
                  ? `/partner-request-page?provider=${provider}`
                  : `/partner-request-page`
              }
            >
              {data?.partnerRequestBtnTitle || "Request Partnership"}
            </Button>
          )}
          {serviceEnabled && (
            <Button
              // visual={"newThemePrimary"}
              isnavlink
              // id="serviceRequestBtn"
              fontSize="14px"
              padding="8px 16px"
              fontWeight={500}
              borderRadius="20px"
              bg={data?.serviceRequestBtnBgColor}
              color={data?.serviceRequestBtnTitleColor}
              title={data?.serviceRequestBtnTitle}
              href={
                provider
                  ? `/service-request-page?provider=${provider}`
                  : `/service-request-page`
              }
            >
              {data?.serviceRequestBtnTitle || "Request Service"}
            </Button>
          )}
        </Flex>
      </VStack>
    </Box>
  ) : (
    <StaticBanner />
  );
}
