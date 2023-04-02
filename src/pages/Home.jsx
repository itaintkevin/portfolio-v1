import { FiLinkedin, FiGithub, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <Fade right>
    <div id="home" className='h-screen w-screen flex flex-col justify-center  text-xl text-white 2xl:px-96 xl:px-72 lg:px-64 sm:px-24 pl-6 pr-4'>
        <div>Hi, I'm</div>
        <div className='from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl xl:text-8xl lg:text-7xl sm:text-6xl text-5xl sm:my-4 my-2'>Kevin Paul.</div>
        <div className='text-[#91EAE4] 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl text-3xl sm:mb-5 mb-4'>I am a Full-Stack Developer.</div>
        <div className='lg:text-lg text-base text-white'>
            Currently learning Solidity and Blockchain Development.
            <br/>
            Exploring Web3 and Blockchain Technology.
            <br/>
            Technical Team Lead at IEEE SRMIST.
            <br/>
            Computer Science Engineering sophomore at SRMIST, India.
        </div>
        <div className='lg:hidden flex items-center text-sm mt-5'><FiMail className='mr-2 h-5 w-5'/>kpjtofficial@gmail.com</div>
        <div className='flex'>
            <a href="https://github.com/itaintkevin"><FiGithub color="#91EAE4" className='mr-3 my-5 h-5 w-5'/></a>
            <a href="https://www.linkedin.com/in/itaintkevin"><FiLinkedin color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></a>
            <a href="https://twitter.com/it_aint_kevin"><FiTwitter color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></a>
            <a href=""><FiInstagram color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></a>
        </div>
    </div>
    </Fade>
  )
}

export default Home;