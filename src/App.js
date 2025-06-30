import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from "./components/Header";
import SpecialtyPage from "./components/SpecialtyPage";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline/Timeline.tsx";
import { useMenu } from './context/MenuContext.tsx';
import styles from './App.module.css';
function App() {
    const currentYear = new Date().getFullYear();
    const { menuOpen } = useMenu();
    return (_jsxs(Router, { children: [_jsx(Header, {}), _jsx("main", { className: `${styles.main} ${menuOpen ? styles.blurred : ''}`, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: `/vstup${currentYear}`, element: _jsx(Timeline, {}) }), _jsx(Route, { path: "/specialty/:slug", element: _jsx(SpecialtyPage, {}) })] }) }), _jsx(Footer, {})] }));
}
export default App;
