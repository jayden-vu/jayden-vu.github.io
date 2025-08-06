import { SpeedInsights } from '@vercel/speed-insights/react';
import AboutText from './components/About';
import BlogSection from './components/Blog';
import ContactSection from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectsSection from './components/Projects';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <SpeedInsights />
      <Navbar />
      <Hero />
      <AboutText />
      <Experience />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
