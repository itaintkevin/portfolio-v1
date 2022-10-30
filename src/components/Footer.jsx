import { GiTechnoHeart } from 'react-icons/gi';

const Footer = () => {
  return (
    <div className='flex flex-col items-center w-full xl:py-10 sm:py-8 pb-10 xl:text-xl lg:text-sm drop-shadow-2xl'>
        <div className='flex items-center'>Made with <GiTechnoHeart className='mx-2'/> by Kevin.</div>
        <div>View Source Code on <a className="underline underline-offset-4 decoration-dashed animate-pulse text-[#7F7FD5]" href="https://github.com/itaintkevin/Portfolio">Github</a></div>
    </div>
  )
}

export default Footer;