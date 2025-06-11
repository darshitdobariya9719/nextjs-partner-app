import { AxiosError } from "axios";
import api from "../axiosClient";

interface Country {
  id: string;
  name: string;
  code?: string;
  iso2?: string;
}

export interface States {
  id: string;
  states: {
    name: string;
    id: string;
  }[];
}
export const getCustomCountryList = async () => {
  try {
    const { countries }: { countries: Country[] } = await api.post(
      "/sp/setup/countries/list",
      {},
      {
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/sc\/?$/, ""),
      }
    );
    return countries || [];
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "An unknown error occurred"
    );
  }
};

export const getCustomStateList = async () => {
  try {
    const { states }: { states: States[] } = await api.post(
      "/sp/setup/states/list",
      {},
      {
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/sc\/?$/, ""),
      }
    );
    return states || [];
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "An unknown error occurred"
    );
  }
};

export const getAllSoftwareList = async (tenantId?: string) => {
  try {
    const url = `/sc/directory/softwares${
      tenantId ? `?tenantId=${tenantId}` : ""
    }`;
    const { data } = await api.get(url);
    return data || [];
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "An unknown error occurred"
    );
  }
};

export const getAllIndustriesList = async (tenantId?: string) => {
  try {
    const url = `/sc/directory/industries${
      tenantId ? `?tenantId=${tenantId}` : ""
    }`;
    const { data } = await api.get(url);
    return data || [];
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "An unknown error occurred"
    );
  }
};

export const getServicesById = async (tenantId?: string) => {
  try {
    const url = `/sc/directory/services${
      tenantId ? `?tenantId=${tenantId}` : ""
    }`;
    const { data } = await api.get(url);
    return data || [];
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "An unknown error occurred"
    );
  }
};
