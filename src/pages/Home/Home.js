import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from '../../components/Container';
import './Home.module.css';
import Hero from "./Hero";
import SpecialtySection from "./SpecialtySection";
import AboutSection from "../../components/About/AboutSection.tsx";
import NewsCarousel from "../../components/NewsCarousel";
export default function Home() {
    return (_jsxs(Container, { children: [_jsx(Hero, {}), _jsx(SpecialtySection, {}), _jsx(NewsCarousel, {}), _jsx(AboutSection, {}), _jsxs("footer", { id: "contacts", className: "footer glass", children: [_jsx("div", { className: "contacts-info" }), _jsx("div", { className: "socials" })] })] }));
}
