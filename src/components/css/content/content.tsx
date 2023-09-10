import { fetchContentData, fetchSidebarData } from '@redux/directUsActions';
import { RootState } from '@redux/reducers';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from '.';
import { Sidebar } from './Sidebar';


export type ContentData = {
    imgSrc: string;
    title: string;
    author: string;
    desc: string;
    imageAWSs3: string;
};

const ContentWrap: React.FC = () => {
    const dispatch = useDispatch();
    const contentData = useSelector((state: RootState) => state.directUs.contentData)
    const sidebarData = useSelector((state: RootState) => state.directUs.sideBarData);
    const status = useSelector((state: RootState) => state.directUs.status)
    const [isOpen, setIsOpen] = useState(false);

    
    useEffect(() => {
        // Fetch the data from an API or receive it as props
        // For demonstration purposes, I'm using hardcoded data:
        
        dispatch(fetchContentData())

        

        if (status === 'loading') {
            document.body.classList.add('js', 'loading');
        } else {
            document.body.classList.remove('js', 'loading');
        }
        
    }, [dispatch]);

    const handleDiscoverClick = (contentType: any) => {
        // so item.id = {}
        // fetch the content from the API
        dispatch(fetchSidebarData(contentType.id))
        setIsOpen(true);  // Open the sidebar when the Discover button is clicked
    };

    const handleSidebarClose = () => {
        setIsOpen(false); // Close the sidebar when outside is clicked
    };

    if (status === 'loading') {
        return <div className="loader">Loading...</div>; // This is your loader. You can style it or use a spinner.
    }

    return (
        <>
           {contentData.map((item: any, index) => (
                <Content onDiscoverClick={() => handleDiscoverClick(item)} key={index} {...item} />
            ))}
            <Sidebar isOpen={isOpen} 
            onClose={handleSidebarClose} 
            title={sidebarData.title} 
            subtitle={sidebarData.subTitle} 
            paragraph={sidebarData.paragraph}
            content={sidebarData.content}/>
        </>
    );
};

export default ContentWrap;
