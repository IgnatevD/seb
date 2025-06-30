import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import Header from "@/components/Header";
import SpecialtyPage from "@/components/SpecialtyPage";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline/Timeline.tsx";
import ContactButton from "@/components/ContactButton";
import {useMenu} from '@/context/MenuContext.tsx';
import styles from './App.module.css';


function App() {
  const currentYear = new Date().getFullYear();
  const {menuOpen, toggleMenu, closeMenu} = useMenu()

  return (
    <Router>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}/>
      <ContactButton/>
      <main className={`${styles.main} ${menuOpen ? styles.blurred : ''}`}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path={`/vstup${currentYear}`} element={<Timeline/>}/>
          <Route path="/specialty/:slug" element={<SpecialtyPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
