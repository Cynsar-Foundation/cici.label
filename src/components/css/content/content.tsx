import { fetchContentData } from '@redux/directUsActions';
import { RootState } from '@redux/reducers';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from '.';
import { Sidebar } from './Sidebar';


import styles from './content.module.css'

export type ContentData = {
    imgSrc: string;
    title: string;
    author: string;
    desc: string;
};

const ContentWrap: React.FC = () => {
    const dispatch = useDispatch();
    const contentData = useSelector((state: RootState) => state.directUs.contentData)
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

    const handleDiscoverClick = () => {
        setIsOpen(true);  // Open the sidebar when the Discover button is clicked
    };

    const handleSidebarClose = () => {
        setIsOpen(false); // Close the sidebar when outside is clicked
    };
    return (
        <>
           {contentData.map((item, index) => (
                <Content onDiscoverClick={handleDiscoverClick} key={index} {...item} />
            ))}
            <Sidebar isOpen={isOpen} 
            onClose={handleSidebarClose} 
            title="Your Title Here" 
            subtitle="Your Subtitle Here" 
            paragraph="Your detailed content paragraph goes here."
            content={'some content'}/>
        </>
    );
};

export default ContentWrap;
