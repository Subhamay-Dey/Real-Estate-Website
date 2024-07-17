"use client"
import React, { useEffect } from 'react'
import Listing from './Listing'
import { supabase } from '@/supabase/client'
import { toast } from 'sonner'

function ListingMapView({type}:any) {

  const [listing, setListings] = React.useState([])
  const [searchedAddress, setSearchedAddress] = React.useState();
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
    .order('id', {ascending: false})

    if(data) {
      console.log(data);
      setListings(data);
    }
    if(error) {
      toast("Server Side Error")
    }
  }

  const handleSearchClick = async() => {

    console.log(searchedAddress);
    const searchTerm = searchedAddress?.value?.structured_formatting?.main_text

    const {data, error} = await supabase
    .from('listing')
    .select(`*, listingImages(
      imgUrl,
      listing_id
    )`)
    .eq('active', true)
    .eq('type', type)
    .like('address', '%'+searchTerm+'%')
    .order('id', {ascending: false})
    
    if(data) {
      setListings(data);
    }
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Listing listing={listing}
          handleSearchClick={handleSearchClick}
          searchedAddress={(v: any) => setSearchedAddress(v)}
        />
      </div>
      <div>
        Map
      </div>
    </div>
  )
}

export default ListingMapView