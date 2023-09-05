import React from 'react';
import image2 from "../Assets/gym.jpg";
import image3 from "../Assets/image.jpg";
import image1 from "../Assets/spa.jpg";
import image4 from "../Assets/conference.jpeg";
import image5 from "../Assets/garage.jpg";


const Facilitiesitems = () => {
  return (

    <div className='lg:px-8 flex gap-6 m-auto justify-center my-16'>

      <div className=' flex flex-col gap-6 text-center'>
        <div className='lg: h-[300px] lg:w-[400px] bg-item1 bg-cover no-repeat bg-center' >
        </div>
        <p>Swimming Pool</p>
        <div className='lg: h-[300px] lg:w-[400px] bg-cover no-repeat bg-center' style={{ backgroundImage: `url(${image3})` }}></div>
        <p>Resturants & Bar</p>
      </div>
      <div className=' flex flex-col gap-6 text-center'>
        <div className='lg: h-[300px] lg:w-[400px] bg-cover no-repeat bg-center' style={{ backgroundImage: `url(${image1})` }}></div>
        <p>Spa & Jaccuzi</p>
        <div className='lg: h-[300px] lg:w-[400px] bg-cover no-repeat bg-center' style={{ backgroundImage: `url(${image4})` }}></div>
        <p>Conference Room</p>
      </div>
      <div className=' flex flex-col gap-6 text-center'>
        <div className='lg: h-[300px] lg:w-[400px] bg-cover no-repeat bg-center' style={{ backgroundImage: `url(${image2})` }}></div>
        <p>Gym</p>
        <div className='lg: h-[300px] lg:w-[400px] bg-cover no-repeat bg-center' style={{ backgroundImage: `url(${image5})` }}></div>
        <p>Packing Garage</p>
      </div>

    </div>
  )
}

export default Facilitiesitems;