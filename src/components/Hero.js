import React from 'react'
import photoGrid from '../images/photo-grid.png'

export default function Hero() {
    return (
        <article>
            <img src={photoGrid} alt='grid of activities'/>
            <h1>Online Experiences</h1>
            <h4>Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </h4>
        </article> 
    );
}