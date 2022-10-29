import React from 'react'
import { Link} from "react-scroll";

const Navbar = () => {
  return (
    <div className='fixed flex items-center justify-between text-white text-xl w-[98%] bg-[#191B24]/40 backdrop-blur-md px-24 py-5'>
        <div className='flex text-3xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl'>itaintkevin</div>
        <div className='flex'>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            className="mx-5 cursor-pointer"
          ><span className='text-[#91EAE4]'>01.</span> Home</Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            className="mx-5 cursor-pointer"
          ><span className='text-[#91EAE4]'>02.</span> Skills</Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            className="mx-5 cursor-pointer"
          ><span className='text-[#91EAE4]'>03.</span> Projects</Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            className="ml-5 cursor-pointer"
          ><span className='text-[#91EAE4]'>04.</span> Experience</Link>
        </div>
    </div>
  )
}

export default Navbar