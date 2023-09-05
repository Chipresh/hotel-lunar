import React from 'react';
import backgroundImage from "../Assets/Burley-Manor-Hotel-Exterior.jpeg";

const Section = () => {
    return (
        
        <div className='lg:mx-auto lg:flex lg:items-center lg:my-16 lg:w-[90%] lg:gap-10'>

            <div className='lg:w-[650px] lg:flex lg:flex-col lg:gap-[23px]'>
                <div className='lg:flex text-[pink] gap-2'>
                    <p className='text-[#4a2869] text-[20px] font-bold'>About</p><p className='text-[#9B51E0]  text-[20px] font-bold'>Hotel Lunar</p>
                </div>
                <div className='line-height-1.2rem'>
                    <p>Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. </p>

                    <p>Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. </p>
                </div>

                <div className=''>
                    <button className='lg: h-[35px] lg:w-32 lg:bg-[#9B51E0] outline-none text-white'>Read More</button>
                </div>
            </div>

            <div className='lg:h-[350px] lg: w-[600px] border-[blue] bg-cover bg-center ' style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>

        </div>
    )
}

export default Section;