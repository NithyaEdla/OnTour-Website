import React, {useState, useEffect} from 'react';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Review from './Components/Review/Review';
import Contact from './Components/Contact/Contact';
import Booknow from './Components/BookNow/Booknow';

const App = () => {
    const initialPage = localStorage.getItem('currentPage') || 'home';
    const [currentPage, setCurrentPage] = useState(initialPage);

    const renderPage = () => {
        switch (currentPage){
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'login' :
                return <Login />  
            case 'register' :
                return <Register /> 
            case 'review' :
                return <Review />
            case 'contact' :
                return <Contact />   
            case 'booknow' :
                return <Booknow />
            default:
                return <Home />;    
        }
    };

    useEffect (() =>{
        localStorage.setItem('currentPage', currentPage);
    }, [currentPage]);

    return(
        <>
        <Navbar 
        onHomeClick={() => setCurrentPage('home')} 
        onAboutClick={() => setCurrentPage('about')} 
        onLoginClick ={() => setCurrentPage('login')} 
        onRegisterClick ={() => setCurrentPage('register')}
        onReviewClick ={() => setCurrentPage('review')}
        onContactClick ={() => setCurrentPage('contact')}
        onBookNowClick ={() => setCurrentPage('booknow')}/>
        {renderPage()}
        </>
    )
};
export default App;