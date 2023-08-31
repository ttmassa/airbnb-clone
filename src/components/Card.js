import React from 'react'
import starImage from '../images/star-icon.png'

export default function Card(props) {
    let badgeText;
    if (props.element.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.element.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <article className='card--container'>
            <img className='card--main-image' src={require(`../images/${props.element.coverImg}`)} alt='Swimmer'/>
            {badgeText && <p className='card--availability'>{badgeText}</p>}
            <div className='card--stats'>
                <img className='card--star' src={starImage} alt="star's icon"/>
                <p className='card--rating'>{props.element.stats.rating}</p>
                <p className='card--rating-number'>({props.element.stats.rating})</p>
                <p className='card--localisation'>• {props.element.location}</p> 
            </div>
            <p className='card--description'>{props.element.title}</p>
            <p className='card--price'><strong>From ${props.element.price}</strong> / person</p>
        </article>
        
    );
}