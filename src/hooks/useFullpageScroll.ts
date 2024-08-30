import { useState, useEffect, useCallback } from 'react';

const SCROLL_THRESHOLD = 50;

export const useFullpageScroll = (numSections: number) => {
    const [currentSection, setCurrentSection] = useState(0);

    const handleScroll = useCallback((event: WheelEvent) => {
        const delta = event.deltaY;

        if (Math.abs(delta) < SCROLL_THRESHOLD) return;

        if (delta > 0 && currentSection < numSections - 1) {
            setCurrentSection(prev => prev + 1);
        } else if (delta < 0 && currentSection > 0) {
            setCurrentSection(prev => prev - 1);
        }
    }, [currentSection, numSections]);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => window.removeEventListener('wheel', handleScroll);
    }, [handleScroll]);

    const scrollToSection = (index: number) => {
        if (index >= 0 && index < numSections) {
            setCurrentSection(index);
        }
    };

    return { currentSection, scrollToSection };
};