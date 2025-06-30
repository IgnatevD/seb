import { useState, useEffect, useRef } from 'react';
export function useLazyLoad(options) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const current = ref.current;
        if (!current)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, options);
        observer.observe(current);
        return () => {
            observer.disconnect();
        };
    }, [options]);
    return { ref, isVisible };
}
