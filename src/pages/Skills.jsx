import React from 'react'
import stacks from '../components/Skills/skillsrc'

const Skills = () => {
  return (
    <div className="h-full w-screen flex flex-col justify-center items-center mb-48">
      <div className='text-4xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl mb-12'>Tech I have worked with,</div>
      <div className='grid gap-4 grid-cols-9 grid-rows-2'>
        {
          stacks.map(item => {
            return(
              <div className='flex flex-col items-center bg-[#242733] rounded-xl px-3 py-3'>
                <img className='h-14 w-14' src={item.src} alt={item.tag}/>
                <div className='font-bold mt-2'>{item.tag}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills