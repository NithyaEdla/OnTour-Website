// import React from 'react'
// import './Login.css';
// import video from "../../assets/video.mp4"
// import { FaUser } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa"

// const Login = () => {
//     return (
//         <div className='login'>
//             <div className='overlay'></div>
//             <video src={video} muted autoPlay loop typeof='video/mp4'></video>
//             <div className='details'>
//                 <div className='user'>
//                         <h1 className='login Title'>Login</h1>
//                         <div className='input'>
//                             <input type='text' placeholder='username' required/><FaUser className='icon'/>
//                         </div>
//                         <div className="input">
//                             <input type="password" placeholder="password" required /><FaEyeSlash className='icon'/>
//                         </div>
//                         <div className='remember-forgot'>
//                             <label>
//                                 <input type='checkbox'></input>
//                             </label>
//                             <a href='#'>Forgot password</a>
//                         </div>
//                         <button type='submit' className='btn'>Login</button>
//                         <div className='register-link'>
//                             <p>Don't have an account?</p>
//                             <a href='#'>Register</a>
//                             </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import './Login.css';
import video from '../../assets/video.mp4';
import { FaUser } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Login() {
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
    };
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };

    const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic 
    };

    return (
    <div className='login'>
        <div className='overlay'></div>
        <video src={video} muted autoPlay loop typeof='video/mp4'></video>
        <div className='details'>
        <div className='login-text'>
        <h2 className='Login Title'>Login</h2>
        <form onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="username" className='input-box'></label>
            <input type="text" id="username" name="username" placeholder='username' required /><FaUser className='icons'/>
        </div>
        <div>
            <label htmlFor="password" className='input-box'></label>
            <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder='password' />
                {showPassword ? <FaEye className='icons' onClick={togglePasswordVisibility}/> : <FaEyeSlash className='icons' onClick={togglePasswordVisibility} />}
        </div>
        <div>
            <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleCheckboxChange}
            className='checkbox'/>
            <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div className='forgot'>
            <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className='btn'>Login</button>
        <div className='register-link'>
            <p>Don't have an account?</p>
                <a href='#'>Register</a>
        </div>
        </form>
        </div>
        </div>
    </div>
    );
}

export default Login;
