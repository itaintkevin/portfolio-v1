import { Link } from "react-scroll";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className='fixed z-10 flex items-center justify-between text-white bg-[#191B24]/80 backdrop-blur-sm text-xl w-full sm:px-24 px-6 lg:py-5 pt-5 pb-5'>
        <div className='flex text-3xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl'>itaintkevin</div>
        <div className='lg:flex hidden'>
          <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="home" className="mx-3 cursor-pointer"><span className='text-[#91EAE4]'>01.</span> Home</Link>
          <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="skills" className="mx-3 cursor-pointer"><span className='text-[#91EAE4]'>02.</span> Skills</Link>
          <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="projects" className="mx-3 cursor-pointer"><span className='text-[#91EAE4]'>03.</span> Projects</Link>
          <Link activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="experience" className="ml-3 cursor-pointer"><span className='text-[#91EAE4]'>04.</span> Experience</Link>
        </div>
        <div className='lg:hidden flex'><GiHamburgerMenu/></div>
    </div>
  )
}

export default Navbar;