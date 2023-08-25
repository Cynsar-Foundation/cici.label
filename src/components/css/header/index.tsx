import React from "react";
import styles from "./index.module.css";

import { Footer, Logo } from "@components/css";

export const Header: React.FC = () => {
  return (
    <div className="content content--fixed" >
      <Logo />
      <Footer/>
    </div>
  );
};
