import { supabase } from '@/supabase/client'
import React, { useEffect } from 'react'

function ViewListing({params}:any) {

  useEffect(() => {
    GetListingDetail();
  },[])

  const GetListingDetail = async() => {
    const {data, error} = await supabase
    .from('listing')
    .select('*, listingImages(imgUrl, listing_id)')
    .eq('id', params.id)

    if(data) {
      console.log(data);
    }
    else{
      console.log(error.message);
    }
  }

  return (
    <div>

    </div>
  )
}

export default ViewListing