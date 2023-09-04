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
