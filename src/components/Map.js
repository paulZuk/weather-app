import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps';

export const Map = withScriptjs(withGoogleMap((props) => {
    const { lat, lng } = props;
    return (
        <GoogleMap 
            defaultZoom={12}
            defaultCenter={{lat, lng}}
        >
            {props.isMarkerShown && <Marker position={{ lat, lng }} />}
        </GoogleMap>
    )
    
}));