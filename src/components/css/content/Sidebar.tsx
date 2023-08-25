import React, { useRef, useEffect } from 'react';
import anime from 'animejs';


type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle: string;
    paragraph: string;
    content: string; // you can replace this with any type of content you want
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose,title, subtitle, paragraph, content }) => {
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const handleOutsideClick = (event: any) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };
        
        if (sidebarRef.current) {
            if (isOpen) {
                anime({
                    targets: sidebarRef.current,
                    right: 0,
                    duration: 500, // Animation duration in ms
                    easing: 'easeInOutQuad'
                });
            } else {
                anime({
                    targets: sidebarRef.current,
                    right: '-500px',
                    duration: 500, // Animation duration in ms
                    easing: 'easeInOutQuad'
                });
            }
        }
        
        if (isOpen) {
            // Delay the attachment of the event listener
            const timeoutId = setTimeout(() => {
                document.addEventListener('click', handleOutsideClick);
            }, 100);
            return () => {
                clearTimeout(timeoutId);
                document.removeEventListener('click', handleOutsideClick);
            };
        }
    }, [isOpen, onClose]);

    return (
        <div ref={sidebarRef} className={`content-wrap sidebar ${isOpen ? 'open' : ''}`}>
            {/* Your sidebar content */}
            <h2 className="sidebar__title">{title}</h2>
            <h3 className="sidebar__subtitle">{subtitle}</h3>
            <p className="sidebar__content">{content}</p>
        </div>
    );
};
