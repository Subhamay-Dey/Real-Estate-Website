import React, { useEffect } from 'react'
import Listing from './Listing'
import { supabase } from '@/supabase/client'

function ListingMapView({type}:any) {

  useEffect(() => {
    getLatestListing();
  },[])

  const getLatestListing = async() => {
    const {data, error} = await supabase
    .from('listing')
    .select(`*, listingImages(
      imgUrl,
      listing_id
    )`)
    .eq('active', type)
    .eq('type', type)

    if(data) {
      console.log(data);
      
    }
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Listing/>
      </div>
      <div>
        Map
      </div>
    </div>
  )
}

export default ListingMapView