import React from 'react'
import starImage from '../images/star-icon.png'

export default function Card(props) {
    return (
        <article className='card--container'>
            <img className='card--main-image' src={require(`../images/${props.img}`)} alt='Swimmer'/>
            <p className='card--availability'>{props.availability}</p>
            <div className='card--stats'>
                <img className='card--star' src={starImage} alt="star's icon"/>
                <p className='card--rating'>{props.rating}</p>
                <p className='card--rating-number'>({props.reviewCount})</p>
                <p className='card--localisation'>• {props.location}</p> 
            </div>
            <p className='card--description'>{props.title}</p>
            <p className='card--price'><strong>From ${props.price}</strong> / person</p>
        </article>
        
    );
}