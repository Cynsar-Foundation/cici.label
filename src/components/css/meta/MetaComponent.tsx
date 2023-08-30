import React from 'react';
import Head from 'next/head';

export type MetaDataProps = {
  metaData: {
    description: string;
    keywords: string;
    author: string;
    title: string;
    image: string;
    url: string;
    type: string;
    favicon: string;
    page: string;
  };
};

const MetaHead: React.FC<MetaDataProps> = ({ metaData }) => {
  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      <meta name="author" content={metaData.author} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.image} />
      <meta property="og:url" content={metaData.url} />
      <meta property="og:type" content={metaData.type} />
      <link rel="icon" href={metaData.favicon} />
      <meta name="page" content={metaData.page} />
    </Head>
  );
};

export default MetaHead;
