import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className='bg-black text-white m-auto lg:flex lg:texts-center lg:mt-16'>

            <div className='lg:flex mx-16 content-between gap-80 lg:my-16'>
                <div className=''>
                    <div className='lg:line-h'>
                        <h4 className='lg:text-2xl font-bold'>Hotel Lunar</h4>
                        <p className='lg:text-[9px]'>will give you the comfort you deserve</p>
                    </div>
                    <div className='flex flex-col lg:gap-4 lg:text-[15px] '>
                        <p className='lg:mt-4'>Address : Road 12, Peace Avenue Lagos, Nigeria</p>
                        <p>Phone number : +2349037461102</p>
                        <p>Email: preciouschidimma647@gmail.com</p>
                    </div>
                </div>

                <div className='flex flex-col lg:gap-4 lg:mt-4 text-[12px] cursor-pointer'>
                    <h3>ABOUT US</h3>
                    <h3>CONTACT US</h3>
                    <h3>ROOMS & RATES</h3>
                    <h3>
                        <Link to='/Facilities'>FACILITIES</Link>
                    </h3>

                </div>

                <div className='flex flex-col lg:text-[13px] gap-4 mt-4 cursor-pointer'>
                    <h3>FACEBOOK</h3>
                    <h3>INSTAGRAM</h3>
                    <h3>TWITTER</h3>
                    <h3>SNAP CHAT</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;