import React from 'react'
import "./Home.css";
import video from "../../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { SiTripadvisor } from "react-icons/si";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";


const Home = () => {
    return (
    <section className='home'>
        <div className='overlay'></div>
        <video src={video} muted autoPlay loop typeof='video/mp4'></video>
        <div className='homeContent container'>
            <div className='textDiv'>
                <h1 className='Title'>Search Your Holiday</h1>
            </div>
            <div className='cardDiv grid'>
                <div className='destinationInput'>
                    <label htmlFor='city'>Search your destination:</label>
                    <div className='input flex'>
                        <input type='text' placeholder='Enter name here...'/>
                        <GrLocation className='icon'/>
                    </div>
                </div>
                <div className='dateInput'>
                    <label htmlFor='date'>Select date</label>
                    <div className='input flex'>
                        <input type='date' />
                    </div>
                </div>
                <div className='priceInput'>
                    <div className='label_total flex'>
                        <label htmlFor='price'>Max price:</label>
                        <h3 className='total'>$5000</h3>
                    </div>
                    <div className='input flex'>
                        <input type='range' max="5000" min="1000" />
                    </div>
                </div>

                <div className='searchOptions flex'>
                    <IoSearch className='icon' />
                    <span>More Options</span>
                </div>
            </div>
            
            <div className='homeFooterIcons flex'>
                <div className='rightIcons'>
                    <FiFacebook className='icon'/>
                    <FiInstagram className='icon'/>
                    <SiTripadvisor className='icon'/>
                </div>
                <div className='leftIcons'>
                    <FaListUl className='icon'/>
                    <TbApps className='icon'/>
                </div>
            </div>
            {/* </div> */}
        </div>
    </section>
    )
}

export default Home;