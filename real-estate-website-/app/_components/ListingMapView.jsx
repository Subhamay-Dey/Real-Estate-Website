"use client"
import React, { useEffect } from 'react'
import Listing from './Listing'
import { supabase } from '@/supabase/client'
import { toast } from 'sonner'
import GoogleMapSection from './GoogleMapSection'

function ListingMapView({type}) {

  const [listing, setListings] = React.useState([])
  const [searchedAddress, setSearchedAddress] = React.useState();
  const [bedCount, setBedCount] = React.useState(0);
  const [bathCount, setBathCount] = React.useState(0);
  const [parkingCount, setParkingCount] = React.useState(0);
  const [homeType, setHomeType] = React.useState();
  const [coordinates, setCoordinates] = React.useState();

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
      // console.log(data);
      setListings(data);
    }
    if(error) {
      toast("Server Side Error")
    }
  }

  const handleSearchClick = async() => {

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
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8'>
      <div>
        <Listing listing={listing}
          handleSearchClick={handleSearchClick}
          searchedAddress={(v) => setSearchedAddress(v)}
          setBedCount = {setBedCount}
          setBathCount = {setBathCount}
          setParkingCount = {setParkingCount}
          setHomeType = {setHomeType}
          setCoordinates = {setCoordinates}
        />
      </div>
      <div className='fixed right-0 h-full md:w-0 lg:w-[50%] xl:w-[50%]'>
        <GoogleMapSection
          listing = {listing}
          coordinates = {coordinates}
        />
      </div>
    </div>
  )
}

export default ListingMapView