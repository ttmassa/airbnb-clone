import React from 'react'
import swimmerImage from '../images/katie-zafares.png'
import starImage from '../images/star-icon.png'

export default function Card() {
    return (
        <article className='card--container'>
            <img className='card--main-image' src={swimmerImage} alt='Swimmer'/>
            <p className='card--availability'>SOLD OUT</p>
            <div className='card--stats'>
                <img className='card--star' src={starImage} alt="star's icon"/>
                <p className='card--rating'>5.0</p>
                <p className='card--rating-number'>(6)</p>
                <p className='card--localisation'>• USA</p> 
            </div>
            <p className='card--description'>Life lesson with Katie Zaferes</p>
            <p className='card--price'><strong>From $136</strong> / person</p>
        </article>
        
    );
}