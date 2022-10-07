import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Card_Creator.css'

function Card({ nameFirst, nameSecond, pfpurl, bio, username, likes, posts, altDescript, key}) {
    return (
        <div className='card-container-creator'>
            <div className='image-container'>
                <LazyLoadImage
                    effect = "blur"
                    src={pfpurl}
                    alt={altDescript}
                    key={key}
                />
            </div>

            <div className="card-content">
                <div className="card-title">
                    <h3>{nameFirst} {nameSecond}</h3>
                </div>
                <div className="card-title">
                    <h4>@{username}</h4>
                </div>
                <div className="card-title">
                    <p>{bio}</p>
                </div>
            </div>

            <div className="subscribeBTN">
                <button>
                    <p>Subscribe</p>
                </button>
            </div>

            <div className="icons">
                <h3>Posts: {posts} Likes: {likes}</h3>
            </div>


            { /*
            <div className="btn">
                <button>
                    <a href="https://youtube.com">
                        View More From This Creator
                    </a>
                </button>
            </div>
            */}
        </div>
    )
}

export default Card