import { useState } from 'react';
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <Fade top>
    <div className='fixed z-10 flex items-center justify-between text-white bg-[#191B24]/80 backdrop-blur-sm text-xl w-full sm:px-24 px-6 py-5'>
        <div className='lg:flex text-3xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl'>itaintkevin</div>
        <div className='lg:flex hidden'>
          <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="home" className="mx-3 cursor-pointer"><span className='text-[#91EAE4]'>01.</span> Home</Link>
          <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="skills" className="mx-3 cursor-pointer"><span className='text-[#91EAE4]'>02.</span> Skills</Link>
          <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="projects" className="mx-3 cursor-pointer"><span className='text-[#91EAE4]'>03.</span> Projects</Link>
          <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="experience" className="ml-3 cursor-pointer"><span className='text-[#91EAE4]'>04.</span> Experience</Link>
        </div>
        <div onClick={handleNav} className='lg:hidden'><AiOutlineMenu/></div>
        <Fade left>
        <div className={
          nav 
            ? "absolute h-screen w-screen flex flex-col items-center top-0 left-0 bg-[#191B24]" 
            : "hidden"
        }>
            <div className="flex justify-between items-center w-full px-6 py-5">
              <div className='text-3xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl'>itaintkevin</div>
              <AiOutlineClose onClick={handleNav} size={20}/>
            </div>
            <div className="flex flex-col text-xl w-full p-5">
              <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="home" className="my-3 py-2 border-b border-[#7F7FD5] cursor-pointer"><span className='text-[#91EAE4]'>01.</span> Home</Link>
              <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="skills" className="my-3 py-2 border-b border-[#7F7FD5] cursor-pointer"><span className='text-[#91EAE4]'>02.</span> Skills</Link>
              <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="projects" className="my-3 py-2 border-b border-[#7F7FD5] cursor-pointer"><span className='text-[#91EAE4]'>03.</span> Projects</Link>
              <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="experience" className="my-3 py-2 border-b border-[#7F7FD5] cursor-pointer"><span className='text-[#91EAE4]'>04.</span> Experience</Link>
            </div>
        </div>
        </Fade>
    </div>
    </Fade>
  )
}

export default Navbar;