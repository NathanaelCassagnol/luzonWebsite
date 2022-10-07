import React, { useEffect, useState } from 'react';

import Axios from 'axios'
import CreatorCard from '../Components/Card_Creator.js'

const Discover = () => {

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

    function trunicateStrings(str)
    {
        if (str != null) {
            if (str.length > 120) {
                str = str.slice(0, 100) + "...";
            }
        }

        return str;
    }

    return (
        <div id="page-wrap">
            <h1>Discover Page</h1>

            <h2>Show account cards in list form</h2>
            <h2>Sort By tags</h2>

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
                            likes={image.user.total_likes }
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default Discover;