import { MarkerF, OverlayView } from '@react-google-maps/api'
import React, { useState } from 'react'
import MarkerListingItem from './MarkerListingItem';

function MarkerItem({item}: any) {

  const scaledSize = new google.maps.Size(60, 60);
  const [selectedListing, setSelectedListing] = useState();

  return (
    <div>
      <MarkerF
        position={item.coordinates}
        onClick={() => setSelectedListing(item)}
        icon={{
          url:'/HomePin.png',
          scaledSize:scaledSize,
        }}
      >
      {selectedListing && <OverlayView
          position={selectedListing.coordinates}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div>
            <MarkerListingItem item={selectedListing}/>
          </div>

        </OverlayView>}
      </MarkerF>
    </div>
  )
}

export default MarkerItem