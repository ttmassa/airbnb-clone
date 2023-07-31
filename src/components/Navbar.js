import React from 'react'
import logoImage from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img className='navbar--logo' src={logoImage} alt="Airbnb's logo"/>
        </nav>
    );
}