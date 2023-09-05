import React from 'react';
import backgroundImage from "../Assets/loft_207-4.jpg";


const Banner = () => {
  return (

    <div className='lg:h-[520px] w-full bg-no-repeat bg-cover bg-center text-center relative' style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute right-[-10px] left-10 top-56 '>
        <h1 className='my-[10px] lg:text-5xl text-white text-bold'>A Memorable Experience.</h1>
        <button className='lg: h-[37px] lg:w-32 lg:bg-[#9B51E0] outline-none my-6 text-[16px] text-white'>Reserve Now</button>
      </div>
    </div>
  )
}

export default Banner;