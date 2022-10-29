import React from 'react'
import details from '../components/Projects/ProjectDetails.jsx'
import { TbExternalLink } from 'react-icons/tb'
import { GiBrain } from 'react-icons/gi'

const Projects = () => {
  return (
    <div className='h-full w-screen flex flex-col justify-center items-center my-20 px-[400px]'>
      <div className='text-4xl mb-16'>Projects</div>
      <div className='h-full w-full flex justify-center py-20'>
            <div className='h-96 w-72 rounded-xl bg-[#242733]'>
              <div className='h-3/5 rounded-xl bg-white'>
                <img src={""} alt={""}/>
              </div>
              <div className='h-2/5 rounded-b-xl'>
                <div>
                  <img src={""} alt={""}/>
                  <div></div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Projects