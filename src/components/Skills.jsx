import React from 'react'
import { FaReact } from 'react-icons';

const Skills = () => {
  return (
    <div className='flex flex-col items-center drop-shadow-2xl mx-5'>
      <div className='text-4xl my-16'>Skills</div>
      <div className='w-full flex flex-col overflow-hidden'>
        <div className='w-full flex py-10 text-xl whitespace-nowrap'>
          <div className='flex'>
            <div className='mx-2 row1'>C</div>
            <div className='mx-2 row1'>C++</div>
            <div className='mx-2 row1'>HTML</div>
            <div className='mx-2 row1'>CSS</div>
            <div className='mx-2 row1'>JavaScript</div>
            <div className='mx-2 row1'>C</div>
            <div className='mx-2 row1'>C++</div>
            <div className='mx-2 row1'>HTML</div>
            <div className='mx-2 row1'>CSS</div>
            <div className='mx-2 row1'>JavaScript</div>
          </div>
        </div>
        <div className='row'>
          <div>
            <div>TypeScript</div>
            <div>Markdown</div>
            <div>Bootstrap</div>
            <div>TailwindCSS</div>
            <div>MUI</div>
          </div>
        </div>
        <div className='row'>
          <div>
            <div>NPM</div>
            <div>Yarn</div>
            <div>Node.js</div>
            <div>Express</div>
            <div>MongoDB</div>
          </div>
        </div>
        <div className='row'>
          <div>
            <div>Mongoose</div>
            <div>Postman</div>
            <div>React.js</div>
            <div>Next.js</div>
            <div>Netlify</div>
          </div>
        </div>
        <div className='row'>
          <div>
            <div>Vercel</div>
            <div>Firebase</div>
            <div>Python</div>
            <div>MySQL</div>
            <div>FastAPI</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills