import { headers } from "next/headers";

export const getSubdomainFromHost = (host: string): string | null => {
  host = host === "localhost:3000" ? "dir-beta.channelboost.com" : host;
  const subDomain = host.split(".")[0];
  if (
    subDomain !== "development" &&
    subDomain !== "dir-beta" &&
    subDomain !== "localhost" &&
    subDomain !== "www" &&
    subDomain !== "sc" &&
    subDomain !== "admin" &&
    subDomain !== "my"
  ) {
    return subDomain;
  }
  return null;
};

export const getMaindomainFromHost = (host: string): string | null => {
  const parts = host.split(".");
  return parts.length > 1 ? parts[1] : null;
};

export const getRequestDomainData = async (provider?: string) => {
  const headersList = await headers();
  const host = headersList.get("host") || "";

  const subdomainName = getSubdomainFromHost(host);
  const mainDomain = getMaindomainFromHost(host);

  const defaultStackPlanDirectory =
    (subdomainName &&
      subdomainName === process.env.NEXT_APP_SUBDOMAIN &&
      mainDomain &&
      mainDomain === process.env.NEXT_APP_APP_STACK_MAIN_DOMAIN) ||
    subdomainName ===
      process.env.NEXT_APP_STACK_PLAN_PARTNER_DIRECTORY_SUBDOMAIN;

  const requestDomainData: {
    page: string;
    slug?: string;
    subDomain?: string | null;
  } = {
    page: "directory-listing",
  };

  if (provider) {
    requestDomainData.slug = provider;
  } else {
    requestDomainData.subDomain = defaultStackPlanDirectory
      ? process.env.NEXT_APP_STACK_PLAN_PARTNER_DIRECTORY_SUBDOMAIN || null
      : subdomainName;
  }

  return requestDomainData;
};
