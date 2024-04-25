import React from 'react';
import './About.css';
import video from "../../assets/video.mp4";
// import img3 from "../../assets/img3.jpg"

const About = () => {
    return (
        <div className="about">
            <div className='overlay'></div>
        <video src={video} muted autoPlay loop typeof='video/mp4'></video>
        {/* <img src='img3' typeof='image'></img> */}
            <div className='about-text'>
                <h1 className='about title'>About Us</h1>
                <p>Welcome to our travel website! We are passionate about helping people explore the world and create unforgettable memories.</p>
                <p>Our mission is to provide travelers with the best resources, tips, and recommendations to plan their dream vacations.</p>
                <p>Whether you're a seasoned globetrotter or a first-time adventurer, we're here to inspire and guide you on your journey.</p>
            </div>
        </div>
    );
};

export default About;
