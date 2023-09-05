import React from 'react';
import image1 from "../Assets/card5.png";
import image2 from "../Assets/card3.jpg";
import image3 from "../Assets/hotel5.jpg";
import image4 from '../Assets/hotel6.jpg';
import image5 from "../Assets/hotel7.png";


const Rate = () => {
    return (
        <div className='w-full flex mx-40 my-16 gap-10 '>

            <div className='flex flex-col gap-4'>
                <div className='h-[300px] w-[500px] bg-cover bg-no-repeat' style={{ backgroundImage: `url(${image5})` }}>
                </div>
                <h3 className='text-center'>Standard Double Room</h3>
                <div className='text-dotted'>
                    <p className=''>1 bathroom</p>
                    <p>2 beds</p>
                    <p>2 people</p>
                </div>
                <div className='flex justify-between mb-6'>
                    <div><h3 className='text-[#9B51E0] font-semibold'>100,000 per night</h3></div>
                    <div><button className='h-[30px] w-[100px] bg-[#9B51E0] text-center text-[#fff] text-[13px]'>BOOK NOW</button></div>
                </div>

                <div className='h-[300px] w-[500px] bg-hotel1 bg-cover bg-no-repeat'></div>
                <h3 className='text-center'>Classic Standard Room</h3>
                <div>
                    <ul>
                        <p>1 bathroom</p>
                        <p>2 beds</p>
                        <p>2 people</p>
                    </ul>
                </div>
                <div className='flex justify-between mb-6'>
                    <div><h3 className='text-[#9B51E0] font-semibold'>50,000 per night</h3></div>
                    <div><button className='h-[30px] w-[100px] bg-[#9B51E0] text-center text-[#fff]'>BOOK NOW</button></div>
                </div>

                <div className='h-[300px] w-[500px] bg-cover  bg-no-repeat' style={{ backgroundImage: `url(${image2})` }}></div>
                <h3 className='text-center'>Penthouse suite with balcony view</h3>
                <div>
                    <p>1 bathroom</p>
                    <p>2 beds</p>
                    <p>2 people</p>
                </div>
                <div className='flex justify-between mb-6 '>
                    <div><h3 className='text-[#9B51E0] font-semibold'>100,000 per night</h3></div>
                    <div><button className='h-[30px] w-[100px] bg-[#9B51E0] text-center text-[#fff]'>BOOK NOW</button></div>
                </div>

            </div>
            <div className='flex flex-col gap-4'>
                <div className='h-[300px] w-[500px] bg-cover bg-center bg-no-repeat' style={{ background: `url(${image3})` }}>
                </div>
                <h3 className='text-center'>Family suite with balcony view</h3>
                <div>
                    <p>1 bathroom</p>
                    <p>2 beds</p>
                    <p>2 people</p>
                </div>
                <div className='flex justify-between mb-6'>
                    <div><h3 className='text-[#9B51E0] font-semibold'>150,000 per night</h3></div>
                    <div><button className='h-[30px] w-[100px] bg-[#9B51E0] text-center text-[#fff]'>BOOK NOW</button></div>
                </div>

                <div className='h-[300px] w-[500px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image4})` }}></div>
                <h3 className='text-center'>Classic Double Room</h3>
                <div>
                    <p>1 bathroom</p>
                    <p>2 beds</p>
                    <p>2 people</p>
                </div>
                <div className='flex justify-between mb-6'>
                    <div><h3 className='text-[#9B51E0] font-semibold'>150,000 per night</h3></div>
                    <div><button className='h-[30px] w-[100px] bg-[#9B51E0] text-center text-[#fff]'>BOOK NOW</button></div>
                </div>

                <div className='h-[300px] w-[500px] bg-cover bg-no-repeat' style={{ backgroundImage: `url(${image1})` }}></div>
                <h3 className='text-center'>Standard Double Room</h3>
                <div>
                    <p>1 bathroom</p>
                    <p>2 beds</p>
                    <p>2 people</p>
                </div>
                <div className='flex justify-between mb-6'>
                    <div><h3 className='text-[#9B51E0] font-semibold'>100,000 per night</h3></div>
                    <div><button className='h-[30px] w-[100px] bg-[#9B51E0] text-center text-[#fff]'>BOOK NOW</button></div>
                </div>
            </div>
        </div>
    )
}

export default Rate;