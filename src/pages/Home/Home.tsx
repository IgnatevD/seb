import Container from '@/components/Container';
// import AboutSection from "../../components/About/AboutSection.tsx";
import NewsCarousel from '@/components/NewsCarousel';
import Assistant from '@/components/Assistant';
import Videos from '@/pages/Home/Videos';
import Hero from '@/pages/Home/Hero';
import SpecialtySection from '@/pages/Home/SpecialtySection';

export default function Home() {
  return (
    <Container>
      <Hero />
      <SpecialtySection />
      <Videos />
      <NewsCarousel />
      <Assistant />
    </Container>
  );
}
