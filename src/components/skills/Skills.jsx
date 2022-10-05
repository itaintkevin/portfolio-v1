import React from 'react'
import stacks from './skillsrc.jsx'

const Skills = () => {
  return (
    <div className='flex flex-col items-center drop-shadow-2xl mx-5 scroll-smooth'>
      <div className='text-4xl my-16'>Skills</div>
      <div className='grid gap-2 grid-cols-3 grid-rows-9 place-content-center w-max mt-5'>
        {
          stacks.map(item => {
            return(
              <div className='flex flex-col items-center bg-[#2c2f3d] rounded-xl px-2 py-2'>
                <img className='h-10 w-10' src={item.src}/>
                <div className='font-semibold'>{item.tag}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Skills