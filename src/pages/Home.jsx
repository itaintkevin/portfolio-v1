import React from 'react'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'

const Home = () => {
  return (
    <div id="home" className='h-screen w-screen flex flex-col px-[400px] text-2xl text-white justify-center'>
        <div>Hi, I'm</div>
        <div className='from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl text-8xl my-4'>Kevin Paul.</div>
        <div className='text-[#91EAE4] text-7xl mb-5'>I am a Front-End Web Developer.</div>
        <div className='text-lg text-white'>
            Curently learning Backend Web Developement.
            <br/>
            Exploring Web3 and Blockchain Technology.
            <br/>
            Technical Team member at IEEE & TEDx SRMIST.
            <br/>
            Computer Science Engineering student at SRMIST, India.
        </div>
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