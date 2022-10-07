import React, {useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { lockIcon } from '../Icons';

function ProtectedImage({ imageurl, altColor, isOwned, altDescript, key2 }) {
    const [ownership, setOwnership] = useState(isOwned);

    const blockerStyle = {
        backgroundColor: altColor,
        height: "450px",
        width: "450px",

        marginLeft: "auto",
        marginRight: "auto"
    };

    const buttonStyle = {
        backgroundColor: "transparent",
        display: "block",
        width: "100%",
        height: "100%"
    }

    function purchase() {
        // create auth, update server

        setOwnership(true);
    }

    function requestImageFromServer(imageURL, authToken) {
        // send auth and imageID to the server check on backend for approval

        return (imageURL);
    }

    return (
        <div>
            {(() => {
                if (ownership) {
                    return (
                        <LazyLoadImage
                            effect="blur"
                            src={requestImageFromServer(imageurl, '')}
                            alt={altDescript}
                            //key={key2}
                        />
                    )
                } else {
                    return (
                        <div style={blockerStyle}>
                            <button style={buttonStyle} onClick={() => purchase()}>
                                <img
                                    src={lockIcon}
                                    alt="locked image"
                                />
                            </button>
                        </div>                     
                    )
                }
            })()}
        </div>
    )
}

export default ProtectedImage