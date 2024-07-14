"use client"
import React, { useEffect } from 'react'
import Listing from './Listing'
import { supabase } from '@/supabase/client'
import { toast } from 'sonner'

function ListingMapView({type}:any) {

  const [listing, setListings] = React.useState([])

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
    .eq('active', true)
    .eq('type', type)

    if(data) {
      console.log(data);
      setListings(data);
    }
    if(error) {
      toast("Server Side Error")
    }
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Listing listing={listing}/>
      </div>
      <div>
        Map
      </div>
    </div>
  )
}

export default ListingMapView