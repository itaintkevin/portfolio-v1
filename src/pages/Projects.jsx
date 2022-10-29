import React from 'react'
import details from '../components/Projects/ProjectDetails.jsx'
import { TbExternalLink } from 'react-icons/tb'
import { GiBrain } from 'react-icons/gi'

const Projects = () => {
  return (
    <div className='h-full w-screen flex flex-col justify-center items-center mt-20 mb-48 px-[300px]'>
      <div className='text-4xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl mb-16'>Projects</div>
      <div className='w-full flex flex-wrap justify-center'>
      {
        details.map((detail) => {
          return(
                  <div className='h-72 w-[350px] rounded-xl bg-[#242733] m-5 p-5'>
                    <div className='flex justify-between my-2'>
                      <a href={detail.link} className='flex items-center font-semibold text-md'><GiBrain className='h-6 w-6 inline-block mr-2'/>VIEW DEPLOYMENT</a>
                      <a href={detail.github}><TbExternalLink className='h-6 w-6 '/></a>
                    </div>
                    <div className='h-3/6'>
                      <div className='flex items-center my-5'>
                        <img className="h-10 w-10 rounded-xl" src={detail.img} alt={detail.title}/>
                        <div className='text-xl font-semibold mx-2'>{detail.title}</div>
                      </div>
                      <div>{detail.about}</div>
                      <div className='flex flex-wrap my-2'>
                        {
                        detail.stack.map(item => {
                          return(                  
                            <div className='from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-slate-900 bg-gradient-to-r drop-shadow-2xl py-1 px-2 rounded-xl mx-1 my-1'>{item}</div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Projects