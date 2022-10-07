import React, { useEffect, useState } from 'react';

import Axios from 'axios'
import ContentCard from '../Components/Card_Content.js'
import CreatorCard from '../Components/Card_Creator.js'

import './home.css';

const Home = () => {

    const unsplashURL = 'https://api.unsplash.com/photos/random?client_id=ujULdABKhI5GqYTLUD3H5cZG0RIFREtFd4vdJmzRjXE&count=5';
    const [images, setImages] = useState([]);

    const getImages = () => {
        Axios.get(unsplashURL).then((res) => {
            console.log(res);
            setImages(res.data);
        });
    }

    useEffect(() => {
        getImages();
    }, [])

    if (!images) {
        return <h1>Loading...</h1>
    }

    function trunicateStrings(str) {
        if (str != null) {
            if (str.length > 120) {
                str = str.slice(0, 100) + "...";
            }
        }

        return str;
    }

    function formatDate(str) {
        return(str)
    }

    return (
        <div id="page-wrap">
            <h1 style={{ fontStyle: "italic" }}>Luzon</h1>
            <h2>VS 3.0.0 Multi-Page Display with Login and Diverse Content</h2>

            <div className='flex-container'>
                <div className='card-container-content-unused'>
                    {images.map((image) => {
                        return (
                            <div id="cards">
                                <ContentCard
                                    nameFirst={image.user.first_name}
                                    nameSecond={image.user.last_name}
                                    username={image.user.instagram_username}
                                    pfpurl={image.user.profile_image.medium}

                                    postDate={formatDate(image.updated_at)}
                                    body={trunicateStrings(image.user.bio)}

                                    imageurl={image.urls.regular}
                                    altDescript={image.alt_description}
                                    altColor={image.color }
                                    key={image.id}
                                />
                            </div>
                        )
                    })}
                </div>

                <div className='card-container-creators'>
                    {images.map((image) => {

                        return (
                            <div id="cards">
                                <CreatorCard
                                    nameFirst={image.user.first_name}
                                    nameSecond={image.user.last_name}
                                    username={image.user.instagram_username}
                                    pfpurl={image.user.profile_image.medium}

                                    bio={trunicateStrings(image.user.bio)}

                                    altDescript={image.alt_description}
                                    key={image.id}
                                    posts={image.user.total_photos}
                                    likes={image.user.total_likes}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            
        </div>
    );
};

export default Home;