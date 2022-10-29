import React from 'react'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi'

const Home = () => {
  return (
    <div id="home" className='h-screen w-screen flex flex-col 2xl:px-96 xl:px-72 lg:px-64 sm:px-24 pl-6 pr-4 text-xl text-white justify-center'>
        <div>Hi, I'm</div>
        <div className='from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl xl:text-8xl lg:text-7xl sm:text-6xl text-5xl sm:my-4 my-2'>Kevin Paul.</div>
        <div className='text-[#91EAE4] 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl text-3xl sm:mb-5 mb-4'>I am a Front-End Web Developer.</div>
        <div className='lg:text-lg text-base text-white'>
            Curently learning Backend Web Developement.
            <br/>
            Exploring Web3 and Blockchain Technology.
            <br/>
            Technical Team member at IEEE & TEDx SRMIST.
            <br/>
            Computer Science Engineering student at SRMIST, India.
        </div>
        <div className='lg:hidden flex items-center text-sm mt-5'><FiMail className='mr-2 h-5 w-5'/>kpjtofficial@gmail.com</div>
        <div className='flex'>
            <div><FiGithub color="#91EAE4" className='mr-3 my-5 h-5 w-5'/></div>
            <div><FiLinkedin color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></div>
            <div><FiTwitter color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></div>
            <div><FiInstagram color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></div>
        </div>
    </div>
  )
}

export default Home