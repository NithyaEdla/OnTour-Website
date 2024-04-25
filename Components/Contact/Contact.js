import React, { useState } from 'react';
import './Contact.css';
import video from '../../assets/video.mp4';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle form submission
        console.log('Form submitted:', { name, email, message });
        // Reset form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='contact-content'>
            <div className='contactss'>
            <video src={video} muted autoPlay loop typeof='video/mp4'></video>
            <div className="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        rows={3}
                        required 
                    />
                </div>
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default Contact;
