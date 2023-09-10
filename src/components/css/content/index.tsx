import { useSpring, animated } from '@react-spring/web';
import React, { useState } from 'react';


type ContentProps = {
    imgSrc: string;
    title: string;
    author: string;
    desc: string;
    layoutType: number;
    imageAWSs3?: string;
    onDiscoverClick: () => void;
};

export const Content: React.FC<ContentProps> = ({ imgSrc, title, author, desc, layoutType, imageAWSs3,onDiscoverClick }) => {
    
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isImageLoaded, setImageLoaded] = useState(false);
    const fadeIn = useSpring({
        opacity: isImageLoaded ? 1 : 0
    });
    return (
        <div className='content-wrap'>
            <div className={`content content--layout content--layout-${layoutType}`}>
            {imageAWSs3 ? (
                    <>
                        {!isImageLoaded && (
                            <div className="spinner"></div> // This will be your spinner
                        )}
                        <animated.img 
                            style={fadeIn}
                            className="content__img" 
                            src={`https://directus-bucket-jy.s3.us-east-1.amazonaws.com/${imageAWSs3}.jpg`} 
                            alt="Some image" 
                            onLoad={() => setImageLoaded(true)}
                        />
                    </>
                ) : null}
                <h3 className="content__title">{title}</h3>
                <p className="content__author">{author}</p>
                <p className="content__desc">{desc}</p>
                <a href="#" className="content__link" onClick={(e) => { e.preventDefault(); onDiscoverClick(); }}>Discover</a>
            </div>
            <style jsx>{`
                .spinner {
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    border-top: 4px solid #000;
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

