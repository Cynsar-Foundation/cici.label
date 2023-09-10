import Head from 'next/head';
import React from 'react';

const AnalyticsComponent = () => {
    return (
        <>
            <Head>
                <script defer data-domain="cicilabel.com" src="https://analytics.cynsar.capital/js/script.js"></script>
            </Head>
            {/* rest of your component */}

            </>
    );
}

export default AnalyticsComponent;
