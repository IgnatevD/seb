import Container from '../../components/Container';
import './Home.module.css';
import Hero from "./Hero";
import SpecialtySection from "./SpecialtySection";
import AboutSection from "../../components/About/AboutSection.tsx";
import NewsCarousel from "../../components/NewsCarousel";
import Videos from "@/pages/Home/Videos";



export default function Home() {
  return (
    <Container>
      <Hero />
      <SpecialtySection/>
      <Videos />
      <NewsCarousel />
      <AboutSection/>
    </Container>
  );
}
