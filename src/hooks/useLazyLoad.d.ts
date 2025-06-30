export declare function useLazyLoad<T extends HTMLElement>(options?: IntersectionObserverInit): {
    ref: import("react").RefObject<T | null>;
    isVisible: boolean;
};
