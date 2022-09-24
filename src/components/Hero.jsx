import React from 'react';
import Intro from './Intro';

const Hero = () => {
  return (
    <div className='flex justify-center items-center h-full px-5 w-7/12 m-auto z-'>
        <div className='w-3/6'>
            <div className="text-5xl my-2">Hey!</div>
            <div className="text-7xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl">I'm Kevin Paul.</div>
        </div>
        <div className='flex justify-end items-center text-xl w-3/6 font-medium'>
          <div className='absolute z-0 bg-[#91EAE4] rounded-xl h-max  px-5 py-14 w-3.5/12'>
          Curently learning Backend Web Developement.🤌
            <br/>
            Exploring Web3 and Blockchain Technology.⛓️
            <br/>
            Technical Team member at IEEE & TEDx SRMIST.💻
            <br/>
            Computer Science Engineering student at SRMIST, India.🏛️
          </div>
          <div className='absolute z-1 bg-[#86A8E7] translate-x-2 translate-y-2 px-5 py-14 rounded-xl w-3.5/12'>
          Curently learning Backend Web Developement.🤌
            <br/>
            Exploring Web3 and Blockchain Technology.⛓️
            <br/>
            Technical Team member at IEEE & TEDx SRMIST.💻
            <br/>
            Computer Science Engineering student at SRMIST, India.🏛️
          </div>
          <div className="absolute z-2 bg-[#2c2f3d] translate-x-4 translate-y-4 rounded-xl h-max w-3.5/12 px-5 py-14 drop-shadow-2xl">
            Curently learning Backend Web Developement.🤌
            <br/>
            Exploring Web3 and Blockchain Technology.⛓️
            <br/>
            Technical Team member at IEEE & TEDx SRMIST.💻
            <br/>
            Computer Science Engineering student at SRMIST, India.🏛️
          </div>
        </div>
    </div>
  )
}

export default Hero