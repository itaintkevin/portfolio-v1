import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div className="w-screen scroll-smooth">
      <div className='fixed top-10 -left-4 w-72 h-72 rounded-full mix-blend-difference animate-blob1 opacity-25 filter blur-3xl bg-[#7F7FD5]'></div>
      <div className='fixed top-20 -right-4 w-72 h-72 rounded-full mix-blend-difference animate-blob2 opacity-25 filter blur-3xl bg-[#91EAE4]'></div>
      <div className='fixed bottom-40 -right-8 w-72 h-72 rounded-full mix-blend-difference animate-blob4 opacity-25 filter blur-3xl bg-[#7F7FD5]'></div>
      <div className='fixed bottom-20 -right-4 w-72 h-72 rounded-full mix-blend-difference animate-blob3 opacity-25 filter blur-3xl bg-[#7F7FD5]'></div>
      <div className='fixed bottom-10 -left-4 w-72 h-72 rounded-full mix-blend-difference animate-blob4 opacity-25 filter blur-3xl bg-[#91EAE4]'></div>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  */}
      <Footer />
    </div>
    </>
  );
}

export default App;
