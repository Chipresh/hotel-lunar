import React from 'react'

const Offer = () => {
    return (

        <div className='lg:m-auto lg:flex lg:px-14 lg:py-4 justify-between lg:text-[15px] lg:font-bold'>

            <div className='flex lg:flex-col lg:gap-2'>
                <p className='lg:text-[20px] text-[#9B51E0]'> We also offer:</p>
                <p> LIbrary services</p>
                <p> Free Wi-fi</p>
                <p> Adequate safety/ security</p>
                <p>Laundry services</p>
            </div>

            <div className='flex lg:flex-col lg:gap-2'>
                <p>Delicious meals</p>
                <p> Air cooling in all rooms</p>
                <p> Room services</p>
                <p> Ticket books</p>
            </div>

            <div className='flex lg:flex-col lg:gap-2'>
                <p>Shuffle/ Private transfers</p>
                <p> Neccessities for babies and chidren</p>

            </div>

        </div>
    )
}

export default Offer;