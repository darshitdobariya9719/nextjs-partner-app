export interface ColorMapping {
  [key: string]: string;
}

export interface HeaderFooterItem {
  section: 'header' | 'footer';
  customMapping: string;
}

export interface BannerMapping {
  bannerHtml: string;
  title?: string;
  subTitle?: string;
  titleColor?: string;
  subTitleColor?: string;
  bg?: string;
  partnerRequestBtnChecked?: boolean;
  partnerRequestBtnColor?: string;
  partnerRequestBtnTitle?: string;
  serviceRequestBtnChecked?: boolean;
  serviceRequestBtnBgColor?: string;
  serviceRequestBtnTitleColor?: string;
  serviceRequestBtnTitle?: string;
  [key: string]: unknown;
}

export interface FilterMapping {
  id: number;
  name: string;
  text: string;
  isChecked: boolean;
}

export interface MatchMakingCardMapping {
  [key: string]: unknown;
}

export type DirectoryListingItem =
  | {
      section: 'banner';
      customMapping: BannerMapping;
      filterMapping?: FilterMapping[];
      matchmakingCardMapping?: undefined;
    }
  | {
      section: 'matchmakingCard';
      customMapping: matchmakingCardData;
      filterMapping?: FilterMapping[];
      matchmakingCardMapping?: matchmakingCardData;
    }
  | {
      section: 'filter';
      filterMapping: FilterMapping[];
      customMapping?: undefined;
      matchmakingCardMapping?: undefined;
    };

export interface CustomThemeResponse {
  'theme-setting': { section: 'colors'; customMapping: ColorMapping }[];
  'header-footer': HeaderFooterItem[];
  'directory-listing': DirectoryListingItem[];
  'pageStatus': {
    page: string;
    status: 'published' | 'draft';
  }[];
  'tenantId': string;
  urls: {
    logo: string;
    favIcon: string;
    isDefaultFavIcon: boolean;
  };
  companyName: string;
}

export interface matchmakingCardData {
  title: string;
  subTitle: string;
  img: string;
  partner: string;
  partnerDescription: string;
  btnBgColor?: string;
  btnTextColor?: string;
  btnText?: string;
  matchMakingRequestBtnChecked?: boolean;
}