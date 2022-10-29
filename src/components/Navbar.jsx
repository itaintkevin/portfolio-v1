import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='fixed flex items-center justify-between text-white bg-[#191B24]/80 backdrop-blur-sm text-xl w-full px-24 py-5'>
        <div className='flex text-3xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl'>itaintkevin</div>
        <div className='flex'>
          <Link className="mx-3 cursor-pointer" to="/"><span className='text-[#91EAE4]'>01.</span> Home</Link>
          <Link className="mx-3 cursor-pointer" to="/skills"><span className='text-[#91EAE4]'>02.</span> Skills</Link>
          <Link className="mx-3 cursor-pointer" to="/projects"><span className='text-[#91EAE4]'>03.</span> Projects</Link>
          <Link className="ml-3 cursor-pointer" to="/experience"><span className='text-[#91EAE4]'>04.</span> Experience</Link>
        </div>
    </div>
  )
}

export default Navbar