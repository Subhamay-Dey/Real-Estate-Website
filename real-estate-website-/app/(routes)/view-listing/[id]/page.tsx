"use client"

import { supabase } from '@/supabase/client'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import Slider from '../_components/Slider';
import Details from '../_components/Details';

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
      setListingDetail(data[0]);
    }
    else{
      toast(error.message);
    }
  }

  return (
    <div className='px-4 md:px-32 lg:px-56 py-5'>
      <Slider imageList = {listingDetail?.listingImages}/>
      <Details listingDetail={listingDetail}/>
    </div>
  )
}

export default ViewListing