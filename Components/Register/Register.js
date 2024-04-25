import React, { useState } from 'react';
import './Register.css';
import video from '../../assets/video.mp4';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Register() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here, such as sending data to the server
        console.log('Form submitted!');
    };
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };

    return (
        <div className='sign-in'>
                <video src={video} muted autoPlay loop typeof='video/mp4'></video>
                <div className='block'>
                <h2>Register</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='form-field'>
                        <input type='text' id='' placeholder='FullName' value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
                    </div>
                    <div className='form-field'>
                        <input type='number' id='phoneNumber' placeholder='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                    </div>
                    <div className='form-field'>
                        <input type='email' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className='form-field'>
                        <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)} required/>
                {showPassword ? <FaEye className='icons' onClick={togglePasswordVisibility}/> : <FaEyeSlash className='icons' onClick={togglePasswordVisibility} />}
                    </div>
                    <div className='form-field'>
                        <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder='Confirm Password'
                        value={password} onChange={(e) =>setPassword(e.target.value)} required/>
                {showPassword ? <FaEye className='icons' onClick={togglePasswordVisibility}/> : <FaEyeSlash className='icons' onClick={togglePasswordVisibility} />}
                    </div>
                    <button type='submit' className='btn'>Register</button>
                </form>                
            </div>
        </div>
    );
}

export default Register;

