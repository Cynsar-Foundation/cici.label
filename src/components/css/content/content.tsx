import React, { useState, useEffect } from 'react';
import { Content } from '.';


type ContentData = {
    imgSrc: string;
    title: string;
    author: string;
    desc: string;
};

const ContentWrap: React.FC = () => {
    const [contentData, setContentData] = useState<ContentData[]>([]);
    
    useEffect(() => {
        // Fetch the data from an API or receive it as props
        // For demonstration purposes, I'm using hardcoded data:
        const data = [
            {
                imgSrc: 'https://cicilabel.com/img/IMG3258.jpg',
                title: 'C for Care',
                author: 'Dharamshala',
                desc: 'our first and foremost concern.',
                layoutType: 1
            },
            {
                imgSrc: 'https://cicilabel.com/img/IMG1876.jpg',
                title: 'i for inversion',
                author: 'Delhi',
                desc: 'inversion, take a deep dive inside yourself.',
                layoutType: 2

            }
            // ... more data
        ];
        
        setContentData(data);
    }, []);

    return (
        <>
            {contentData.map((item, index) => (
                <Content key={index} {...item} />
            ))}
        </>
    );
};

export default ContentWrap;
