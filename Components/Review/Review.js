import React,{useState} from 'react'
import './Review.css'
import video from '../../assets/video.mp4';
import { FaStar } from "react-icons/fa"

const Review = () => {
    return (
    <div className='Review-content'>
        <video src={video} muted autoPlay loop typeof='video/mp4'></video>
        <div className='views'>
        <div className="post">
            {/* <h2>Thanks for rating us!</h2>
            <h2 className='edit'>Edit</h2> */}
        </div>
        <div class="star-widget">
            <div className='star-container'>
            <input type="radio" name="rate" id="rate-5"/><FaStar className='iconss'/>
            <label for="rate-5"></label>
            <input type="radio" name="rate" id="rate-4"/><FaStar className='iconss'/>
            <label for="rate-4"></label>
            <input type="radio" name="rate" id="rate-3" /><FaStar className='iconss'/>
            <label for="rate-3"></label>
            <input type="radio" name="rate" id="rate-2" /><FaStar className='iconss'/>
            <label for="rate-2"></label>
            <input type="radio" name="rate" id="rate-1" /><FaStar className='iconss'/>
            <label for="rate-1">
            </label> 
            </div>  
            <form >
                <div className='textarea'>
                    <textarea cols={30} placeholder='Describe your experience...'></textarea>
                </div>
                <div className='button'>
                    <button type='submit'>Post</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    )
}

export default Review;