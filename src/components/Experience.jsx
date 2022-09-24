import React from 'react'
import details from './ExpDetails.jsx'
import { TbExternalLink } from 'react-icons/tb'

const Experience = () => {
  return (
    <div className='relative flex flex-col items-center mx-5'>
      <div className='text-4xl my-16'>Experience</div>
      {
        details.map((detail) => {
          return(
            <div className='bg-[#2c2f3d] text-md rounded-xl drop-shadow-2xl w-full my-3 p-5'>
              <div className='flex justify-between my-2'>
                <div className='font-semibold text-sm'>{detail.field}</div>
                <TbExternalLink/>
              </div>
              <div className='flex items-center my-2'>
                <div className='h-10 w-10'><img src={detail.logo} alt=""/></div>
                <div className='text-xl font-semibold mx-2'>{detail.name}</div>
              </div>
              <div className='my-2 text-slate-300 font-semibold'>{detail.duration}</div>
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
          );
        })
      }
    </div>
  )
}

export default Experience