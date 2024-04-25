import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({children, onHomeClick, onAboutClick }) => {
    return (
    <div>
        <Navbar onHomeClick={onHomeClick} onAboutClick={onAboutClick}/>
        {children}
    </div>
    );
}

export default Layout;