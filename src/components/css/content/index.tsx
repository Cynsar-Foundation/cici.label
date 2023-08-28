import React, { useState } from 'react';
import { Sidebar } from './Sidebar';

type ContentProps = {
    imgSrc: string;
    title: string;
    author: string;
    desc: string;
    layoutType: number;
    imageAWSs3: string;
    onDiscoverClick: () => void;
};

export const Content: React.FC<ContentProps> = ({ imgSrc, title, author, desc, layoutType, imageAWSs3,onDiscoverClick }) => {
    
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className='content-wrap'>
            <div className={`content content--layout content--layout-${layoutType}`}>
                <img className="content__img" src={`https://directus-bucket-jy.s3.us-east-1.amazonaws.com/${imageAWSs3}.jpg`} alt="Some image" />
                <h3 className="content__title">{title}</h3>
                <p className="content__author">{author}</p>
                <p className="content__desc">{desc}</p>
                <a href="#" className="content__link" onClick={(e) => { e.preventDefault(); onDiscoverClick(); }}>Discover</a>
            </div>
        </div>
    );
};

