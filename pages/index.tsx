import React, { useEffect } from "react";

import { Content, Footer, Header } from "@components/css";
import ContentWrap from "@components/css/content/content";
import MorphComponent from "@components/css/animation";
import { Main } from "next/document";
import { useApiStatus } from "@components/context/ApiStatusContext";
import { useRouter } from "next/router";

const Home: React.FC = () => {

  const router = useRouter();
  const { sourceType, advertType } = router.query;
  useEffect(() => {
    // If you want to send this data to analytics or any other reporting tool
    if (sourceType) {
      console.log(`User arrived from: ${sourceType} and advertType ${advertType}`);
      // Send to analytics or do other tasks...
    }
  }, [sourceType]);
  return (
    <main
    >
      <MorphComponent/>
    </main>
  );
};

export default Home;
