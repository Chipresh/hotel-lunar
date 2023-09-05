import React from 'react';
import image1 from "../Assets/bx_bxs-phone.png";
import image2 from "../Assets/ant-design_mail-filled.png";
import image3 from "../Assets/entypo_location-pin.png";

const Locations = () => {
  return (

    <div className='lg:flex lg:items-center justify-around lg:my-3'>
      <div className='flex gap-2'>
        <img src={image1} alt="" className='lg:h-6' />
        <h2>+2349037461102</h2>
      </div>
      <div className='lg:flex gap-2'>
        <img src={image2} alt="" className='lg:h-6 lg:my-1' />
        <h2>preciouschidimma647@gmail.com</h2>
      </div>
      <div className='lg:flex gap-2'>
        <img src={image3} alt="" className='lg:h-6 ' />
        <h2>Road 12, Peace Avenue Lagos, Nigeria</h2>
      </div>

    </div>
  )
}

export default Locations;