import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import AreasSection from './sections/AreasSection'
import TechSection from './sections/TechSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AreasSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App