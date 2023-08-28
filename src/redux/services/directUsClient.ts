import { ContentData } from "@components/css/content/content";
import { createDirectus, readItem, readItems } from "@directus/sdk";
import { rest } from '@directus/sdk';

export type SideBarData = {
  title: string,
  subTitle: string,
  paragraph: string,
  content: string
  
}
let url = "";

if (process.env.NODE_ENV === "production") {
  // Set the production URL
  url = process.env.NEXT_PUBLIC_API_URL as string;
} else {
  // Set the local URL
  url = "http://localhost:8055/";
}

const directus = createDirectus(url).with(rest());


export const getWebsiteTitleAndFooter = async (): Promise<any> => {
    const response = await directus.request(readItem('website', 1))  // Assuming '1' is the ID of the article you want to fetch
    return response
};

export const getContentData = async (): Promise<ContentData[]> => {
  const response:ContentData[] = await directus.request<ContentData[]>(readItems('front_matter'));
  return response;
};

export const getSidebarData = async (ID: number): Promise<SideBarData[]> => {
  const response:SideBarData[] = await directus.request<SideBarData[]>(readItem('contentData', ID))
  return response
}

export default directus;