import React from 'react'
import details from './ProjectDetails.jsx'
import stacks from './stacks.jsx'
import { TbExternalLink } from 'react-icons/tb'
import { GiBrain } from 'react-icons/gi'

const Projects = () => {
  return (
    <div className='flex flex-col items-center drop-shadow-2xl mx-5'>
      <div className='text-4xl my-16'>Projects</div>
      {
        details.map((detail) => {
          return(
            <div className='bg-[#2c2f3d] text-md rounded-xl drop-shadow-2xl w-full my-3 p-5'>
              <div className='flex justify-between my-2'>
                <div className='flex items-center font-semibold text-sm'><GiBrain className='inline-block mr-2'/>VIEW DEPLOYMENT</div>
                <TbExternalLink/>
              </div>
              <div className='flex items-center my-2'>
                <div className='h-10 w-10'><img className="rounded-xl" src={detail.img} alt=""/></div>
                <div className='text-xl font-semibold mx-2'>{detail.title}</div>
              </div>
              <div>{detail.about}</div>
              <div className='flex flex-wrap my-2'>
                  <div className='from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-slate-900 bg-gradient-to-r drop-shadow-2xl py-1 px-2 rounded-xl mx-1 my-1'>{detail.stack1}</div>
                  <div className='from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-slate-900 bg-gradient-to-r drop-shadow-2xl py-1 px-2 rounded-xl mx-1 my-1'>{detail.stack2}</div>
                  <div className='from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-slate-900 bg-gradient-to-r drop-shadow-2xl py-1 px-2 rounded-xl mx-1 my-1'>{detail.stack3}</div>
                  <div className='from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-slate-900 bg-gradient-to-r drop-shadow-2xl py-1 px-2 rounded-xl mx-1 my-1'>{detail.stack4}</div>
                  <div className='from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-slate-900 bg-gradient-to-r drop-shadow-2xl py-1 px-2 rounded-xl mx-1 my-1'>{detail.stack5}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Projects