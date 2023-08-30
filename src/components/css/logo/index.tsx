import { fetchTitle } from "@redux/directUsActions";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Logo: React.FC = () => {

  const title = useSelector((state: RootState) => state.directUs.websiteData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitle());
}, [dispatch]);

  return (
    <header className="codrops-header"><div className="codrops-links">
      <svg className="decoshape" viewBox="0 0 200 100" width="100%" height="100%" preserveAspectRatio="none">
							<path d="M 10.45,74.41 C 39.4,110.8 72.59,67.27 95.98,68.68 122.3,70.35 131.5,101.4 154.7,99.69 177.9,98.03 200.5,79.26 198.1,47.17 195.9,15.27 174.6,-0.3279 151.8,0.9941 128.6,2.581 126,16.86 107,22.76 88.26,28.67 88.87,12.36 60.37,1.787 31.79,-8.877 -18.61,37.92 10.45,74.41 Z" />
						</svg>
      </div><h1 className="codrops-header__title">{title.title}</h1></header>
      
  );
};
