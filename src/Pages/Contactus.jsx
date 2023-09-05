import React from 'react';
import Navbar from "../Components/Navbar";
import Contact from '../Components/Contact';
import Mail from '../Components/Mail';
import Locations from '../Components/Locations';
import Footer from '../Components/Footer';

const Contactus = () => {
    return (
        <div>
            <section>
                <Navbar />
                <Contact />
                <Mail />
                <Locations />
                <Footer />
            </section>
        </div>
    )
}

export default Contactus;