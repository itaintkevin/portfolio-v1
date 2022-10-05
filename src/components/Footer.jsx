import React from 'react'
import { GiCentaurHeart } from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='flex flex-col items-center w-screen my-20 text-xl scroll-smooth'>
      <div className='my-2'>Crafted with <GiCentaurHeart className='inline-block'/> by Kevin</div>
      <div>View Source on <a  className='underline decoration-dashed animate-pulse' href="https://github.com/itaintkevin/Portfolio">Github</a></div>
    </div>
  )
}

export default Footer