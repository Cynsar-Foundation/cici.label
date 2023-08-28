import React from 'react';
import { animated, useTransition } from '@react-spring/web';
import Link from 'next/link';

const AboutComponent = () => {
    
    const transitions = useTransition(true, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },  // Start from the right
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },   // Slide in to natural position
        leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' }, // Slide out to the left
        config: {
            mass: 1,
            tension: 2100,
            friction: 260,
        },
    });
    return transitions((style, item)=> 
        item? 
        <animated.div style={style}>
            <div className="hero">
            <div className="back-icon">
                <Link href="/">← Back to home page </Link>    
                </div>
            <h1>Our Inception</h1>
            <p>
                Our inception as a business hinged upon an experiment: a philosophical exploration of fabric sourcing from the multifarious locales of India. At the time, handloom was a term thrown around rather loosely, usually serving as decorative facades in ostentatious storefronts. However, our curiosity went beyond the superficial veneer of this industry; we wanted to dig deep into the heart of the handloom segment, interacting with the very weavers who wove tales of their lives into each thread.
            </p>
            <p>
                It was Sham who navigated through the hinterlands of West Bengal, sourcing fabrics imbued with narratives that could only be spun by the delicate hands of artisans rooted in the land. Meanwhile, my role was anchored in the gruelling mechanics of logistics, facilitating the transportation and warehousing of these precious bundles. And then there was Cici, embodying the spirit of our cause, she was our torchbearer, testing and providing feedback on the quality of our fabrics, while ensuring our vision always remained intact.
            </p>
            <p>
                From this unique trinity was born CiCi Label, our brand that is much more than a simple name. Each letter in our title carries a significant philosophical import: 'C' stands for Care, reflective of our responsibility towards our customers and the artisans we collaborate with; 'I' denotes Inversion, symbolising our intent to turn the traditional textile industry on its head; the second 'C' encapsulates Compassion, mirroring our commitment to maintaining an empathetic understanding towards all; and the final 'I' is for Impermanence, a humbling reminder of the fleeting nature of existence and the need for constant evolution.
            </p>
            <p>
                Thus, when you peruse through our offerings, know that you aren't merely a customer but a participant in an intimate personal space. This is a space where you're invited to delve into the authentic world of handloom, a space where the experiences aren't mass-produced, but carefully curated to resonate with the rich tapestry of tales that our fabrics embody. We aim to offer you a glimpse of the diverse weaving traditions, not just from India, but from around the world, each a testament to the universality and uniqueness of human culture.
            </p>
        </div>

        </animated.div>
    : null
    );
}

export default AboutComponent;
