import React, { useEffect, useState } from 'react';

import Axios from 'axios'
import MarketCard from '../Components/Card_MarketItem.js'

import './market.css';

const Market = () => {

    const unsplashURL = 'https://api.unsplash.com/photos/random?client_id=ujULdABKhI5GqYTLUD3H5cZG0RIFREtFd4vdJmzRjXE&count=10';
    const [images, setImages] = useState([]);

    const str = "";

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

    function createPrice(str) {
        if (str != null) {
            str = str + ".99";
        }
        else
            str = 9.97;

        return str;
    }

    return (
        <div id="page-wrap">
            <h1>Marketplace</h1>

            <h2>Show items for sale</h2>
            <h2>Filter Items</h2>


            <div className="grid-container">
                {images.map((image) => {

                    return (
                        <MarketCard
                            nameFirst={image.user.first_name}
                            nameSecond={image.user.last_name}
                            username={image.user.instagram_username}
                            pfpurl={image.user.profile_image.medium}

                            itemurl={image.urls.regular}
                            itemDescription = {image.description}
                            cost={createPrice(image.user.likes)}

                            altDescript={image.alt_description}
                            key={image.id}
                            posts={image.user.total_photos}
                            likes={image.user.total_likes}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Market;