import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./index.module.css";

export const Footer: React.FC = () => {
  const footer = useSelector((state: any) => state.directUs.title)
  return (
    <div className="deco deco--title">{footer.footer}</div>
  );
};
