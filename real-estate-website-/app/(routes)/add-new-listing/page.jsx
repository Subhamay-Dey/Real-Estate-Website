"use client"

import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch';
import { Button } from '@/components/ui/button';
import { supabase } from '@/supabase/client';
import React, { useState } from 'react';
import {toast} from "sonner";
import Loading from './loading';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

function AddNewListing() {

  const {user} = useUser();

  const [selectedAddress, setSelectedAddress] = useState();
  const [coordinates, setCoordinates] = useState();

  const [loader, setLoader] = useState(false);

  const router = useRouter();
 
  const nextHandler = async() => {
    // console.log(selectedAddress, coordinates);
    setLoader(true)
    const { data, error } = await supabase
    .from('listing')
    .insert([
      { address: selectedAddress.label, 
        coordinates: coordinates,
        createdBy: user?.primaryEmailAddress.emailAddress,
      },
    ])
    .select()
        
    if(data) {
      console.log("New Data added", data);
      toast("New Address added for listing")
      setLoader(false)
      router.push('/edit-listing/'+data[0].id)
    } 
    if(error) {
      console.log("Error", error);
      toast("Server side error")
      setLoader(false)
    }

  }

  return (
    <div className='mt-10 w-full xl:px-48 justify-center items-center'>
    <div className='p-10 flex flex-col gap-5 justify-center items-center'>
        <h2 className='font-bold text-2xl'>Add New Listing</h2>
        
        <div className='p-10 rounded-lg border shadow-md flex flex-col gap-5 w-[80%]'>
          <h2 className='text-gray-500'>Enter Address which you want to list</h2>
          <GoogleAddressSearch 
            selectedAddress={(value) => setSelectedAddress(value)}
            setCoordinates={(value) => setCoordinates(value)}
          />
          <Button
            disabled={!selectedAddress || !coordinates}
            onClick={nextHandler}
          >{loader ? <Loading className='animate-spin'/> : "Next"}</Button>
        </div>

    </div>
    </div>
  )
}

export default AddNewListing