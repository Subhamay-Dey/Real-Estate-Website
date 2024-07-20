import { supabase } from '@/supabase/client'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

function ViewListing({params}:any) {

  const [listingDetail, setListingDetail] = useState();

  useEffect(() => {
    GetListingDetail();
  },[])

  const GetListingDetail = async() => {
    const {data, error} = await supabase
    .from('listing')
    .select('*, listingImages(imgUrl, listing_id)')
    .eq('id', params.id)
    .eq('active', true)

    if(data) {
      console.log(data);
      setListingDetail(data);
    }
    else{
      toast(error.message);
    }
  }

  return (
    <div>

    </div>
  )
}

export default ViewListing