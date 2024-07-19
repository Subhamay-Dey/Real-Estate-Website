import { MarkerF } from '@react-google-maps/api'
import React from 'react'

function MarkerItem({item}: any) {
  return (
    <div>
      <MarkerF
        position={item.coordinates}
      >

      </MarkerF>
    </div>
  )
}

export default MarkerItem