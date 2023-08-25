import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for enhanced matchers
import MorphComponent from '../src/components/css/main/morph'; // adjust the path as necessary

describe('<MorphComponent />', () => {
    beforeEach(() => {
        render(<MorphComponent />);
    });

    it('renders the SVG morph element', () => {
        const svgElement = screen.getByRole('img', { name: /morph/i });
        expect(svgElement).toBeInTheDocument();
        expect(svgElement.tagName).toBe('SVG');
    });

    it('renders content elements', () => {
        const contentElems = screen.getByTestId('content-elems');
        expect(contentElems).toBeInTheDocument();
        // If you expect multiple content elements inside, you can further check:
        const individualContentElems = screen.queryAllByTestId('content-elem'); // assuming you've added data-testid="content-elem" to each content element
        expect(individualContentElems.length).toBeGreaterThan(0);
    });

    it('renders content links', () => {
        const contentLinks = screen.getByTestId('content-links');
        expect(contentLinks).toBeInTheDocument();
        // If you expect multiple links inside, you can further check:
        const individualLinks = screen.queryAllByTestId('content-link'); // assuming you've added data-testid="content-link" to each link
        expect(individualLinks.length).toBeGreaterThan(0);
    });

    it('renders the footer', () => {
        const footer = screen.getByRole('contentinfo'); // assuming the footer has a role of "contentinfo"
        expect(footer).toBeInTheDocument();
    });
});
