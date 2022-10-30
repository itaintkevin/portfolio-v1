import stacks from '../components/Skills/SkillsDetails';
import { motion } from "framer-motion";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Skills = () => {
  return (
    <div id="skills" className="h-full w-screen flex flex-col justify-center items-center sm:mb-48 mb-10">
      <Fade bottom ><div className='lg:text-4xl sm:text-3xl text-2xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl mt-20 mb-16'>Tech I have worked with,</div></Fade>
      <div className='grid sm:gap-4 gap-2 2xl:grid-cols-9 2xl:grid-rows-2 xl:grid-cols-6 xl:grid-rows-3 grid-cols-3 grid-rows-9'>
        {
          stacks.map(item => {
            return(
              <Bounce bottom>
              <motion.div 
                whileHover={{ scale: 1, rotate: 25 }}
                whileTap={{ scale: 1.2, rotate: 0 }}
                className='flex flex-col items-center bg-[#242733] rounded-xl xl:p-3 lg:p-2 p-1'>
                <img className='xl:h-14 xl:w-14 lg:h-10 lg:w-10' src={item.src} alt={item.tag}/>
                <div className='xl:font-bold lg:font-semibold mt-2'>{item.tag}</div>
              </motion.div>
              </Bounce>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills;