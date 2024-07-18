"use client"
import React, { useEffect } from 'react'
import Listing from './Listing'
import { supabase } from '@/supabase/client'
import { toast } from 'sonner'

function ListingMapView({type}:any) {

  const [listing, setListings] = React.useState([])
  const [searchedAddress, setSearchedAddress] = React.useState();
  const [bedCount, setBedCount] = React.useState(0);
  const [bathCount, setBathCount] = React.useState(0);
  const [parkingCount, setParkingCount] = React.useState(0);
  const [homeType, setHomeType] = React.useState();

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

  const handleSearchClick = async(value : any) => {

    console.log(searchedAddress);
    const searchTerm = searchedAddress?.value?.structured_formatting?.main_text

    let query = supabase
    .from('listing')
    .select(`*, listingImages(
      imgUrl,
      listing_id
    )`)
    .eq('active', true)
    .eq('type', type)
    .gte('bedroom', bedCount)
    .gte('bathroom', bathCount)
    .gte('parking', parkingCount)
    .like('address', '%'+searchTerm+'%')
    .order('id', {ascending: false})

    if(homeType) {
      query = query.eq('propertyType', homeType)
    }

    const {data, error} = await query
    
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
          setBedCount = {setBedCount}
          setBathCount = {setBathCount}
          setParkingCount = {setParkingCount}
          setHomeType = {setHomeType}
        />
      </div>
      <div>
        Map
      </div>
    </div>
  )
}

export default ListingMapView