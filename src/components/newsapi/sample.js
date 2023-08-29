// import { useState } from "react";

// function News(props) {
//     const [bgcolor, setBgcolor] = useState("black");

//     const onClick = () => {
//         setBgcolor("blue");
//     };

//     const onDoubleClick = (newBgcolor) => {
//         setBgcolor('brown')
//     };

//     return (
//         <div style={{ backgroundColor: bgcolor }}>
//             <div className="container col-md-6 my-5 card">
//                 <button className="btn" onClick={onClick} onDoubleClick={onDoubleClick}>changebgcolor</button>
//             </div>
//             <p className="text-white text-center">DoubleClick color change </p>
//         </div>
//     );
// }

// export default News;
import React, { useState, useEffect } from 'react';

function GeolocationComponent() {

    const [position, setPosition] = useState({ latitude: null, longitude: null })

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setPosition({ latitude, longitude });
                },
                (error) => {
                    console.error(error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported in this browser.');
        }
    }, []);
    return (
        <div>
            Latitude: {position.latitude}<br />
            Longitude: {position.longitude}
        </div>
    );
}

export default GeolocationComponent;
