'use client'
import React, { useCallback, useState } from 'react'
import cntl from 'cntl'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const classes = {
    mapContainer: cntl`
    h-screen w-full
    `
}

const center = {
    lat: -3.745,
    lng: -38.523
};

type Props = {}

const key = 'AIzaSyA-kc4-KAoHyBV0ezh-2K9kon_faxAEEt8';
export const Map = (props: Props) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: key
    })

    const [map, setMap] = useState<google.maps.Map | null>(null)

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map: google.maps.Map) {
        setMap(null)
    }, [])

    return (
        <div className={classes.mapContainer}>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            ) : <></>
            }
        </div>
    )
}