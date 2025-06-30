import React from "react";
interface MenuContextType {
    menuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}
export declare const MenuProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useMenu: () => MenuContextType;
export {};
