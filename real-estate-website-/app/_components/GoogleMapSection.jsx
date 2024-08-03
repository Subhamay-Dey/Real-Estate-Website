"use client"

import React, {useEffect, useState} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MarkerItem from './MarkerItem';

const containerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: 10,
  };

function GoogleMapSection({coordinates, listing}) {

  const [center, setCenter] = useState({
    lat: 40.730610,
    lng:  -73.935242
  })

  const [map, setMap] = useState(null);

  useEffect(() => {
coordinates && setCenter(coordinates)
  },[coordinates])

  const onLoad = React.useCallback(function callback(map) {
    if (window.google && window.google.maps) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    }
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);


  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        // onLoad={onLoad}
        onUnmount={onUnmount}
        gestureHandling="greedy"
      >
        {
          listing.map((item, index) => (
            <MarkerItem
              key={index}
              item={item}
            />
          ))
        }
      </GoogleMap>
    </div>
  );
}

export default GoogleMapSection