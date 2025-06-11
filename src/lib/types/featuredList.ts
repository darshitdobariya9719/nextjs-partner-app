export interface FeaturedDirectoryItem {
  tenantId: string;
  slug?: string;
  logo: string;
  companyName: string;
  companyDetails?: string;
  tier?: string;
  review?: {
    avg: number;
    numberOfReview: number;
  };
}

export interface FeaturedListResponse {
  directoryList: FeaturedDirectoryItem[];
}

export interface PartnerTireItem {
  count: number;
  description: string;
  id: string;
  isDefault: boolean;
  tenantId: string;
  title: string;
  rank: number;
  partnerProgramCount: number;
  modified: string;
}

export interface PartnerTireListResponse {
  partnerTierList: PartnerTireItem[];
}

export interface DirectoryListItem {
    id: string;
    companyName: string;
    companyDetails?: string;
    logo: string;
    tier?: string;
    slug?: string;
    tenantId: string;
    review?: {
      avg: number;
      numberOfReview: number;
    };
    // add other fields returned from API
  }

export interface DirectoryListResponse {
  directoryList: DirectoryListItem[];
  total: number;
}
