import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Card_MarketItem.css'

function Card({ nameFirst, nameSecond, pfpurl, itemurl, username, cost, itemDescription, altDescript, key }) {
    return (
        <div className='card-container-marketitem'>

            <div className='pfp-container'>
                <img
                    src={pfpurl}
                    alt="profile picture"
                />
            </div>

            <div className='pfp-content'>
                <div className='pfp-title'>
                    <h3>{nameFirst} {nameSecond}</h3>
                </div>
                <div className='pfp-title'>
                    <h4>@{username}</h4>
                </div>
            </div>

            <div className='image-container-item'>
                <LazyLoadImage
                    effect="blur"
                    src={itemurl}
                    alt={altDescript}
                    key={key}
                />
            </div>

            <div className="item-description">
                <h2>{itemDescription}</h2>
            </div>
            <div>
                <h3>${cost}</h3>
            </div>
            
           
        </div>
    )
}

export default Card