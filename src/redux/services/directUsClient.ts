import { ContentData } from "@components/css/content/content";
import { createDirectus, readItem, readItems } from "@directus/sdk";
import { rest } from '@directus/sdk';
import { RootState } from "@redux/reducers";
import getConfig from "next/config";
import { useSelector } from "react-redux";

export type SideBarData = {
  title: string,
  subTitle: string,
  paragraph: string,
  content: string
  
}

export type MetaData = []

export type WebsiteData = {
  id: number,
  metaData: []
  title: string, 
  footer: string, 
  websiteName: string,
}
let url = "";

if (process.env.NODE_ENV === "production") {
  // Set the production URL
  url = process.env.NEXT_PUBLIC_API_URL as string;
} else {
  // Set the local URL
  url = "https://api.cynsar.capital/";
}

const directus = createDirectus(url).with(rest());
const { publicRuntimeConfig } = getConfig();
const websiteName = publicRuntimeConfig.websiteName;


export const getWebsiteTitleAndFooter = async (): Promise<WebsiteData[]> => {
    const response:WebsiteData[] = await directus.request<WebsiteData[]>(readItems('website', {
      filter: {
        website_domain: {
          _eq: websiteName
        }
      }
    })) 
    return response
};

export const getContentData = async (): Promise<ContentData[]> => {
  const response:ContentData[] = await directus.request<ContentData[]>(readItems('front_matter',{
    fields: ['*,imageAWSs3.filename_disk']
  }));
  return response;
};

export const getSidebarData = async (ID: number): Promise<SideBarData> => {
  const response:SideBarData = await directus.request<SideBarData>(readItem('contentData', ID))
  return response
}

export const getMetaData = async (id: number): Promise<MetaData> => {
  // Fetch metadata for a specific website ID
  const response:any = await directus.request<any>(readItem('website', id, {
    fields: ['metaData.item.*', 'metaData.item.favicon.filename_disk']
  }));

  return response.metaData;
};



export default directus;