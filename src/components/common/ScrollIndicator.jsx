import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * ScrollIndicator Component
 * 
 * A functional scroll indicator that:
 * 1. Animates a bounce effect to encourage scrolling.
 * 2. Scrolls the page down when clicked.
 * 3. Fades out as the user scrolls down the page.
 * 
 * @param {string} color - Tailwind text color class (default: 'text-white')
 * @param {string} opacity - Tailwind opacity class (default: 'opacity-30')
 * @param {string} className - Additional CSS classes for the container
 */
const ScrollIndicator = ({ color = 'text-white', opacity = 'opacity-30', className = '' }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Fade out the indicator after scrolling 100px
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContent = () => {
        // Scroll to the next "section" or 80% of viewport height
        window.scrollTo({
            top: window.innerHeight * 0.85,
            behavior: 'smooth'
        });
    };

    return (
        <div 
            onClick={scrollToContent}
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 max-lg:hidden cursor-pointer transition-all duration-500 ease-in-out ${opacity} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'} ${className}`}
        >
            <ChevronDown className={`w-8 h-8 ${color} animate-bounce`} />
        </div>
    );
};

export default ScrollIndicator;
