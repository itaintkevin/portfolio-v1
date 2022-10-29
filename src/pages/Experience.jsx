import React from 'react'
import details from '../components/Experience/ExpDetails.jsx'
import { TbExternalLink } from 'react-icons/tb'
import { IoIosRocket } from 'react-icons/io';

const Experience = () => {
  return (
    <div className='h-full w-screen flex flex-col justify-center items-center mt-20 mb-24 px-[300px]'>
      <div className='text-4xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl mb-16'>Experience</div>
      <div className='w-full flex flex-wrap justify-center'>
      {
        details.map((detail) => {
          return(
                  <div className='h-72 w-[350px] rounded-xl bg-[#242733] m-5 p-5'>
                    <div className='flex justify-between my-2'>
                      <div className='flex items-center font-semibold text-md'><IoIosRocket className='h-6 w-6 inline-block mr-2'/>{detail.field}</div>
                      <a href={detail.link}><TbExternalLink className='h-6 w-6 '/></a>
                    </div>
                    <div className='h-3/6'>
                      <div className='flex items-center my-5'>
                        <img className="h-10 w-10 rounded-xl" src={detail.logo} alt={detail.name}/>
                        <div className='text-xl font-semibold mx-2'>{detail.name}</div>
                      </div>
                      <div>{detail.duration}</div>
                      <div>
                        <ul>
                          <li>{detail.workexp1}</li>
                          <li>{detail.workexp2}</li>
                          <li>{detail.workexp3}</li>
                          <li>{detail.workexp4}</li>
                          <li>{detail.workexp5}</li>
                        </ul>
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

export default Experience