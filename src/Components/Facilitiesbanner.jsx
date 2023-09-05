import React from 'react';
import backgroundImage from "../Assets/facili.png";

const Facilitiesbanner = () => {
  return (

    <div className='lg:h-[450px] lg:w-full lg:bg-cover bg:no-repeat bg-center text-center relative ' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='absolute w-[100%] lg:my-52 '>
        <h2 className='text-white lg:text-2xl font-bold'>FACILITIES</h2>
      </div>
    </div>
  )
}

export default Facilitiesbanner;