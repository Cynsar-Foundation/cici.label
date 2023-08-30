import React, { useEffect } from "react";
import MorphComponent from "@components/css/animation";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import { fetchMetaData } from "@redux/directUsActions";
import MetaHead from "@components/css/meta/MetaComponent";
import {  animated, useSpring } from "@react-spring/web";
import UserObservationComponent from "@components/css/observation/UserObservationComponent";


const Home: React.FC = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const websiteData = useSelector((state: RootState) => state.directUs.websiteData)

  const metaTags  = useSelector((state: RootState) => state.directUs.metaData);

  const { sourceType, advertType } = router.query;
  
  useEffect(() => {
    // Check if websiteData.id exists and websiteData.metaData is an array
    if (websiteData && websiteData.id && Array.isArray(websiteData.metaData)) {
      dispatch(fetchMetaData(websiteData.id));
    }

  }, [dispatch, websiteData]);

  useEffect(() => {
    if (sourceType) {
      console.log(`User arrived from: ${sourceType} and advertType ${advertType}`);
      // Send to analytics or do other tasks...
    }
  }, [sourceType, advertType]);

  const indexMetaTag = metaTags ? metaTags.find(tag => tag.item.page === 'index') : null;

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });



  return (
    <>
    <main>
      <animated.main style={springProps}>
      {indexMetaTag && indexMetaTag.item.page === 'index' && <MetaHead metaData={indexMetaTag.item} />}
      <MorphComponent />
    </animated.main>
    </main>
    <UserObservationComponent/>
    </>
  );
};

export default Home;
