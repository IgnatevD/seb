import Container from '../../components/Container';
import './Home.module.css';
import Hero from "./Hero";
import SpecialtySection from "./SpecialtySection";
import AboutSection from "../../components/About/AboutSection.tsx";
import NewsCarousel from "../../components/NewsCarousel";



export default function Home() {
  return (
    <Container>
      <Hero />
      <SpecialtySection/>
      <NewsCarousel />
      <AboutSection/>

      <footer id="contacts" className="footer glass">
        <div className="contacts-info">
        </div>

        <div className="socials">
        </div>
      </footer>
    </Container>
  );
}
