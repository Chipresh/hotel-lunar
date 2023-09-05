import React from 'react';
import Navbar from '../Components/Navbar';
import Suites from '../Components/Suites';
import Rate from '../Components/Rate';
import Footer from "../Components/Footer";

const Rooms = () => {
  return (
    <div className='overflow-hidden'>
      <section>
        <Navbar />
        <Suites />
        <Rate />
        <Footer/>
      </section>

    </div>
  )
}

export default Rooms;