"use client"

import { MapPin } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch({selectedAddress, setCoordinates}) {

  const [placeholder, setPlaceholder] = useState('Search Property Address');

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth <= 767) {
        setPlaceholder('Search');
      } 
      else {
        setPlaceholder('Search Property Address');
      }
    };

    updatePlaceholder();

    window.addEventListener('resize', updatePlaceholder);

    return () => window.removeEventListener('resize', updatePlaceholder);
  }, []);

  return (
    <div className='w-full flex items-center'>
      <MapPin className='cursor-pointer h-10 w-10 p-2 text-primary bg-purple-200 rounded-l-lg'/>
        <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
            selectProps={{
                placeholder:placeholder,
                isClearable:true,
                className:'w-full',
                onChange:(place) => {
                    if(place && place.label) {
                      // console.log(place);
                      selectedAddress(place);
                      geocodeByAddress(place.label)
                      .then(result => getLatLng(result[0]))
                      .then(({lat, lng}) => {
                        console.log(lat, lng);
                        setCoordinates({lat, lng})
                      })
                      .catch(error => {
                        console.error("Geocoding error:", error);
                      });
                    } else {
                      console.warn("Invalid place object:", place);
                    }
                }
            }}
        />
    </div>
  )
}

export default GoogleAddressSearch