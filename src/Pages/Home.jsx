import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Section from '../Components/Section';
import Main from '../Components/Main';
import Card from '../Components/Card';
import Footer from '../Components/Footer';


const Home = () => {
  return (

    <div className='overflow-hidden'>

      <section>
        <Navbar />
        <Banner />
        <Section />
        <Main />
        <Card />
        <Footer />
      </section>

    </div>
  )
}

export default Home;