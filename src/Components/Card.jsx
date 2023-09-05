import React from 'react';
import image1 from "../Assets/card1.jpg";
import image2 from "../Assets/card2.jpg";
import image3 from "../Assets/card3.jpg";
import image4 from "../Assets/card4.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../index.css"
import Carousel from "nuka-carousel";

const Card = () => {

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className='lg:w-[90%] m-auto bg-white-200 items-center content-center flex flex-col  lg:mt-11 gap-6'>
      <h1 className='text-[20px] text-[#9B51E0] font-bold'>Our Galleries</h1>
      <Carousel {...settings} >
        {/* <div className='flex items-center w-[50%]'> */}
        <div className='p-2'>
          <img src={image3} alt='' className='h-[250px] w-[420px]' />
        </div>
        <div className='p-2 '>
          <img src={image2} alt='' className='h-[250px] w-[420px]' />
        </div>
        <div className='p-2'>
          <img src={image1} alt='' className='h-[250px] w-[420px]' />
        </div>
        <div className='p-2'>
          <img src={image4} alt='' className='h-[250px] w-[420px]' />
        </div>
        <div className='p-2'>
          <img src={image1} alt='' className='h-[250px] w-[420px]' />
        </div>
        <div className='p-2'>
          <img src={image3} alt='' className='h-[250px] w-[420px]' />
        </div>
        <div className='p-2'>
          <img src={image2} alt='' className='h-[250px] w-[420px]' />
        </div>
        {/* </div> */}
      </Carousel>
    </div>
  )
}

export default Card;