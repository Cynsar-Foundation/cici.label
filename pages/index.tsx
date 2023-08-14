import React from "react";

import { Content, Footer, Header } from "@components/css";
import ContentWrap from "@components/css/content/content";
import MorphComponent from "@components/css/animation";
import { Main } from "next/document";

const Home: React.FC = () => {
  return (
    <main
    >
      <MorphComponent/>
    </main>
  );
};

export default Home;
