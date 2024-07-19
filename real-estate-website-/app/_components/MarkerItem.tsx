import { MarkerF } from '@react-google-maps/api'
import React from 'react'

function MarkerItem({item}: any) {

  const scaledSize = new google.maps.Size(60, 60);

  return (
    <div>
      <MarkerF
        position={item.coordinates}
        onClick={() => console.log(item)}
        icon={{
          url:'/HomePin.png',
          scaledSize:scaledSize,
        }}
      >

      </MarkerF>
    </div>
  )
}

export default MarkerItem