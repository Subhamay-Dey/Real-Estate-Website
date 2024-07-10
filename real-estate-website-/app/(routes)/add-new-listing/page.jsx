"use client"

import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch';
import { Button } from '@/components/ui/button';
import { supabase } from '@/supabase/client';
import React, { useState } from 'react';
import {toast} from "sonner";
import Loading from './loading';

import { useUser } from '@clerk/nextjs';

function AddNewListing() {

  const {user} = useUser();

  const [selectedAddress, setSelectedAddress] = useState();
  const [coordinates, setCoordinates] = useState();

  const [loader, setLoader] = useState(false)
 
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
    } 
    if(error) {
      console.log("Error", error);
      toast("Server side error")
      setLoader(false)
    }

  }

  return (
    <div className='mt-10 md:mx-56 lg:mx-80'>
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

    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', minHeight: '100vh', width: '100%', paddingTop: '5rem' }}>
    //   <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '600px' }}>
    //     <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' }}>Add New Listings</h1>
    //     <h2 style={{ color: 'gray', textAlign: 'center' }}>Enter Address which you want to list</h2>
    //     <GoogleAddressSearch 
    //       selectedAddress={(value) => setSelectedAddress(value)}
    //       setCoordinates={(value) => setCoordinates(value)}
    //     />
    //     <Button
    //       disabled={!selectedAddress || !coordinates || loader}
    //       onClick={nextHandler}
    //       style={{ width: '100%' }}
    //     >{loader ? <Loading className='animate-spin'/> : "Next"}</Button>
    //   </div>
    // </div>
  )
}

export default AddNewListing