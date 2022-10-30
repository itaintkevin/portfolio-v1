import { useRef } from 'react'
import useScrollSnap from 'react-use-scroll-snap';
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from './components/Footer';


function App() {

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <>
      <Navbar/>
      <Socials/>
      <div ref={scrollRef} className='overflow-x-hidden'>
        <div><Home/></div>
        <div><Skills/></div>
        <div><Projects/></div>
        <div><Experience/></div>
        <div><Footer/></div>
      </div>
    </>
  );
}

export default App;
