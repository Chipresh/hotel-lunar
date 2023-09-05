import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toggleSlice from '../features/toggleSlice';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const dispatch = useDispatch();
    const menuState = useSelector((state) => state.toggleSlice.toggle);

    // Define the toggleMenu function

    function renderMenu() {
        return (

            menuState &&
            <div className="lg:flex lg:items-center lg:gap-4 lg:text-[18px] md:flex md:flex-" >
                <ul className="flex items-center gap-6 font-bold tracking-wide text-[black] cursor-pointer">
                    <li className='cursor-pointer text-[#9B51E0] lg:text-[18px]'>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/Rooms">Rooms & Suites</Link>
                    </li>
                    <li>
                        <Link to="/Facilities">Facilities</Link>
                    </li>
                    <li>
                        <Link to="/Contactus">Contact</Link>
                    </li>
                    <li>Events</li>
                </ul>
            </div>
        );
    }

    function toggleMenu() {
        dispatch(toggleSlice.actions.toggleMenu())
    }

    return (
        <nav className='lg:h-[8vh] lg:w-[90%] bg-[white] flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto my-3 md:h-6 md:w-[50%]'>
            <h1 className='text-5xl text-[#9B51E0] lg:font-bold  cursor-pointer'>Hotel Lunar</h1>
            <button onClick={toggleMenu} className="py-2 text-[20px] h-[48px] rounded-3xl w-[150px] bg-[black] text-center outline-none text-[#fff] my-2 hover:bg-[#9B51E0] ">Toggle Menu</button>
            {renderMenu()}
        </nav>
    );
};

export default Navbar;