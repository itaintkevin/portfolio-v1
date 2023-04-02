import details from '../data/ExpDetails.jsx';
import { motion } from "framer-motion";
import { TbExternalLink } from 'react-icons/tb';
import { IoIosRocket } from 'react-icons/io';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Experience = () => {
  return (
    <div id="experience" className='h-full w-screen flex flex-col justify-center items-center mt-20 sm:mb-24 mb-10 2xl:px-48 xl:px-52 md:px-24 sm:px-36 px-6'>
      <Fade bottom>
      <div className='text-4xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl mt-20 mb-16'>Experience</div>
      </Fade>
      <div className='w-full flex flex-wrap justify-center'>
      {
        details.map((detail) => {
          return(
                  <Flip left>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.05 }}
                    className='h-80 sm:h-72 sm:w-[350px] w-[325px] rounded-xl bg-[#242733] xl:m-5 m-3 p-5'>
                    <div className='flex justify-between my-2'>
                      <div className='flex items-center font-semibold text-sm'><IoIosRocket className='h-6 w-6 inline-block mr-2'/>{detail.field}</div>
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
                  </motion.div>
                  </Flip>
          )
        })
      }
      </div>
    </div>
  )
}

export default Experience;