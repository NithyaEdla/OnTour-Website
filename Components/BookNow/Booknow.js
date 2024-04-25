import React from 'react'
import "./BookNow.css";
import video from '../../assets/video.mp4';

const Booknow = () => {
    return (
    <div className='travel'>
        <div className='booking'>
            <video src={video} muted autoPlay loop typeof='video/mp4'></video>
            <div className='booknow'>
                <h2>Book Now</h2>
                <form>
                    <div className='inputs'>
                        <input type='name'
                        placeholder='name' required/>
                    </div>
                    <div className='inputs'>
                        <input type=''
                        placeholder='place' required/>
                    </div>
                    <div className='inputs'>
                        <input type='number'
                        placeholder='phone number' required/>
                    </div>
                    <div className='inputs'>
                        <input type='number'
                        placeholder='alternative number' required/>
                    </div>
                    <div className='inputs'>
                        <input type=''
                        placeholder='E-mail' required/>
                    </div>
                    <div className='inputs'>
                        <input type=''
                        placeholder= 'Password' required/>
                    </div>
                    <div className='inputs'>
                        <input type='number'
                        placeholder='No.of people' required/>
                    </div>
                    <div className='inputs'>
                        <input type='number'
                        placeholder='No.of days' required/>
                    </div>
                    <div className='inputs'>
                        <input type=''
                        placeholder='Arrival date' required/>
                    </div>
                    <div className='inputs'>
                        <input type='number'
                        placeholder='Return date' required/>
                    </div>
                </form>
                <button type='submit' className='btn'>Book</button>
            </div>
        </div>
    </div>
    )
}

export default Booknow;