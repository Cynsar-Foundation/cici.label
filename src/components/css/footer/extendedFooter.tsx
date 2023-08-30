// components/Footer.jsx

import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';

const ExtendedFooter = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="https://shop.cicilabel.com" target="_blank" rel="noopener noreferrer">Shop</a>
                <Link href="/about">About Us</Link>
                <a href="https://stories.cynsar.foundation">Stories</a>
                <a href="https://shop.cicilabel.com/contact/">Contact</a>
                <a href="https://shop.cicilabel.com/terms">Terms & Conditions</a>
                <a href="https://shop.cicilabel.com/privacy">Privacy Policy</a>
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Cici Label and Jaal Yantra Textiles. All rights reserved.
            </div>
        </footer>
    );
};

export default ExtendedFooter;
