import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from "react";
const MenuContext = createContext(undefined);
export const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);
    // 👇 Блокировка скролла при открытом меню
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);
    return (_jsx(MenuContext.Provider, { value: { menuOpen, toggleMenu, closeMenu }, children: children }));
};
export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within MenuProvider");
    }
    return context;
};
