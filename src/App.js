import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Socials/>
      <div className='overflow-x-hidden'>
        <div><Home/></div>
        <div><Skills/></div>
        <div><Projects/></div>
        <div><Experience/></div>
        <div><Footer/></div>
      </div>
      {/* <Routes>
        <Route path="/" element={<Home/>        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experience" element={<Experience/>}/>
      </Routes> */}
    </>
  );
}

export default App;
