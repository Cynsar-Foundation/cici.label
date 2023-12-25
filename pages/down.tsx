import DownComponent from "@components/css/main/about";
import AboutComponent from "@components/css/main/about";
import MetaHead from "@components/css/meta/MetaComponent";
import { RootState } from "@redux/reducers";
import {  useSelector } from "react-redux";


const About: React.FC = () => {
  const metaTags  = useSelector((state: RootState) => state.directUs.metaData);

  const indexMetaTag = metaTags ? metaTags.find(tag => tag.item.page === 'down') : null;

    return (
      <>
        {indexMetaTag && indexMetaTag.item.page === 'down' && <MetaHead metaData={indexMetaTag.item} />}
        <DownComponent/>
      </>
    );
  };
  

  export default About;