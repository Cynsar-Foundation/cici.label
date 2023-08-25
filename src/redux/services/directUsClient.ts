import { ContentData } from "@components/css/content/content";
import { createDirectus, readItem, readItems } from "@directus/sdk";
import { rest } from '@directus/sdk';
let url = "";

if (process.env.NODE_ENV === "production") {
  // Set the production URL
  url = "https://example.com/";
} else {
  // Set the local URL
  url = "http://localhost:8055/";
}

const directus = createDirectus(url).with(rest());


export const getWebsiteTitleAndFooter = async (): Promise<string> => {
    const response = await directus.request(readItem('website', 1))  // Assuming '1' is the ID of the article you want to fetch
    return response
};

export const getContentData = async (): Promise<ContentData[]> => {
  const response = await directus.request(readItems('front_matter'));
  return response;
};

export default directus;