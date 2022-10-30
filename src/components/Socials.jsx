import dp from '../assets/pic.jpeg';

const Socials = () => {
  return (
    <>
    <div className='fixed lg:flex hidden rotate-90 items-center bottom-40 left-[-90px]'>
      <div className='text-[#91EAE4] mx-3'>kpjtofficial@gmail.com</div>
      <div className='bg-[#7F7FD5] h-[2px] w-48'></div>
    </div>
    <div className='fixed hidden bottom-14 right-24 h-20 w-20'>
      <img className="rounded-full" src={dp} alt="Profile Picture"/>
    </div>
    </>
  )
}

export default Socials;