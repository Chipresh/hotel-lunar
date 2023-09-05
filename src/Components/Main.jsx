import React from 'react';
import backgroundImage from "../Assets/image4.jpg";

const Main = () => {
    return (

        <div className='lg:h-[500px] lg:w-full lg:bg-cover bg:no-repeat bg-center mx-auto relative text-[#FFF]' style={{ backgroundImage: `url(${backgroundImage})` }}>
            
            <div className='text-center mx-64 w-[700px] flex flex-col absolute my-40 gap-4  '>
                <h3 className='lg:text-2xl text-bold'>Events & Weddings</h3>
                <p className='text-center items-center'> Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. </p>
            </div>

        </div>
    )
}

export default Main;