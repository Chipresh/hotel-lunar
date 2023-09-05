import React from 'react';
import Navbar from '../Components/Navbar';
import Facilitiesbanner from '../Components/Facilitiesbanner';
import Facilitiesitems from '../Components/Facilitiesitems';
import Footer from "../Components/Footer";
import Offer from '../Components/Offer';


const Facilities = () => {
    return (

        <div>

            <section>
                <Navbar />
                <Facilitiesbanner />
                <Facilitiesitems />
                <Offer />
                <Footer />
            </section>

        </div>
    )
}

export default Facilities;