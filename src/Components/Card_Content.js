import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Card_Content.css'

import ProtectedImage from './ProtectedImage.js';

import { commentIcon, donateIcon, downloadIcon, likeIcon, moreIcon } from '../Icons';

function Card({ pfpurl, nameFirst, nameSecond, username, postDate, imageurl, body, altDescript, altColor, key }) {
    return (
        <div className='card-container-content'>
            <div className='pfp-container'>
                <img
                    src={pfpurl}
                    alt="profile picture"
                />
            </div>

            <div className='date'>
                <h4>{postDate}</h4>
            </div>

            <div className='pfp-content'>
                <div className='pfp-title'>
                    <h3>{nameFirst} {nameSecond}</h3>
                </div>
                <div className='pfp-title'>
                    <h4>@{username}</h4>
                </div>
            </div>
            <div className='image-container-content'>
                <ProtectedImage
                    imageurl={imageurl}
                    altColor={altColor}
                    isOwned={false}
                    altDescript={altDescript}
                    key2={key}
                />
            </div>

            {/*
             <div className='image-container-content'>
                <LazyLoadImage
                    effect="blur"
                    src={imageurl}
                    alt={altDescript}
                    key={key}
                />
            </div>
             */ }


            <div className="description-content">
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            
            <div className="card-buttons-container-content">
                <button>  <img src={likeIcon} /> </button>
                <button>  <img src={commentIcon} /> </button>   
                <button>  <img src={donateIcon} /> </button>        
                <button>  <img src={downloadIcon} /> </button>    
                <button>  <img src={moreIcon} /> </button>
            </div>
        </div>
    )
}

export default Card