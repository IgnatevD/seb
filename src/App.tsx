import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from "./components/Header";
import SpecialtyPage from "./components/SpecialtyPage";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline/Timeline.tsx";
import { useMenu } from './context/MenuContext.tsx';
import styles from './App.module.css';



function App() {
  const currentYear = new Date().getFullYear();
  const { menuOpen} = useMenu();

  return (
    <Router>
      <Header />
      <main className={`${styles.main} ${menuOpen ? styles.blurred : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/vstup${currentYear}`} element={<Timeline />} />
          <Route path="/specialty/:slug" element={<SpecialtyPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
