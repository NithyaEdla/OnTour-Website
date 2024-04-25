import React,{useState} from 'react'
import './Navbar.css';
import { FaGlobeAsia } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = ({ onHomeClick, onAboutClick, onLoginClick, onRegisterClick, onReviewClick, onContactClick, onBookNowClick}) => {
    const [active, setActive] = useState('Navbar')

    //Function to toggle Navbar
    const showNav = () =>{
        setActive('Navbar activeNavbar')
    }

    //Function to remove Navbar
    const removeNavbar = () =>{
        setActive('Navbar')
    }

    // Function to handle click on Home button
    const handleHomeClick = () => {
        onHomeClick(); // Call the onHomeClick function received from props
        // setActive(false); // Close the navbar after navigating
    }

    // Function to handle click on About button
    const handleAboutClick = () => {
        onAboutClick(); // Call the onAboutClick function received from props
        // setActive(false); // Close the navbar after navigating
    }

    // Function to handle click on Login button
    const handleLoginClick = () => {
        onLoginClick(); // Call the onAboutClick function received from props
        // setActive(false); // Close the navbar after navigating    
    };

    // Function to handle click on Register button
    const handleRegisterClick = () => {
        onRegisterClick(); // Call the onAboutClick function received from props
        // setActive(false); // Close the navbar after navigating    
    };

    // Function to handle click on Review button
    const handleReviewClick = () => {
        onReviewClick(); // Call the onAboutClick function received from props
        // setActive(false); // Close the navbar after navigating    
    };

    // Function to handle click on Review button
    const handleContactClick = () => {
        onContactClick(); 
        // setActive(false); // Close the navbar after navigating    
    };

    // Function to handle click on Book Now button
    const handleBookNowClick = () => {
        onBookNowClick();
        // setActive(false);
    };

    return (
    <section className='NavbarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1><FaGlobeAsia className='icon' />OnTour</h1>
                </a>
            </div>
            <div className={active}>
                <ul className='Navlists flex'>
                    <li className='Navitem'>
                        <a href='#' className='Navlink' onClick={handleHomeClick
                        }>Home</a>
                    </li>
                    <li className='Navitem'>
                        <a href='#' className='Navlink' onClick={handleAboutClick}>About</a>
                    </li>
                    <li className='Navitem'>
                        <a href='#' className='Navlink' onClick={handleLoginClick}
                        >Login</a>
                    </li>
                    <li className='Navitem'>
                        <a href='#' className='Navlink' onClick={handleRegisterClick}>Register</a>
                    </li>
                    <li className='Navitem'>
                        <a href='#' className='Navlink' onClick={handleReviewClick}>Review</a>
                    </li>
                    {/* <li className='Navitem'>
                        <a href='#' className='Navlink'>Bookings</a>
                    </li> */}
                    <li className='Navitem'>
                        <a href='#' className='Navlink' onClick={handleContactClick}>Contact</a>
                    </li>
                    <li className='Navitem'>
                    <button className='btn' onClick={handleBookNowClick}>
                        <a href='#'>BOOK NOW</a>
                    </button>
                    </li>
                </ul>
                <div onClick={removeNavbar} className='closeNavbar'>
                    <IoMdCloseCircle className='icon' />
                </div>
            </div>

            <div onClick={showNav} className='toggleNavbar'>
                <TbGridDots className='icon' />
            </div>
        </header>
    </section>
    )
}

export default Navbar;