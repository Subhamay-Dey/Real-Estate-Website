import { Button } from '@/components/ui/button';
import { supabase } from '@/supabase/client'
import { useUser } from '@clerk/nextjs'
import { Bath, BedDouble, MapPin, Ruler, Trash, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"

function UserListing() {

    const {user} = useUser();

    const [listing, setListing] = useState();

    useEffect(() => {
        user && GetUserListing();
    },[user])

    const GetUserListing = async() => {

        const {data, error} = await supabase
        .from('listing')
        .select('*, listingImages(imgUrl, listing_id)')
        .eq('createdBy',user?.primaryEmailAddress?.emailAddress)

        setListing(data);
        console.log(data);
    }

  return (
    <div>
        <h2 className='font-bold text-2xl'>Manage your listing</h2>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {
            listing && listing.map((item, index)=> (
            <div key={index} className='p-3  cursor-pointer rounded-lg'>
                <h2 className='bg-primary m-1 text-white w-[90px] flex justify-center items-center rounded-t text-md'>{item.active ? "Published" : "Draft"}</h2>
              <Image src={item?.listingImages[0]?.imgUrl}
                width={800}
                height={150}
                className='rounded-lg object-cover h-[200px]'
                alt='listingImage'
              />
              <div className='flex mt-2 flex-col gap-2'>
                <h2 className='font-bold text-xl'>${item.price}</h2>
                <h2 className='flex gap-2 text-sm text-gray-400'>
                  <MapPin className='h-4 w-4'/>
                {item.address}</h2>

                <div className='flex gap-2 mt-2 justify-between'>
                    <h2 className='flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center'>
                      <BedDouble className='h-4 w-4'/>
                      {item?.bedroom}
                    </h2>
                    <h2 className='flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center'>
                      <Bath className='h-4 w-4'/>
                      {item?.bathroom}
                    </h2>
                    <h2 className='flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center'>
                      <Ruler className='h-4 w-4'/>
                      {item?.area}
                    </h2>
                </div>
                <div className='flex gap-2 justify-between'>
                    <Link href={"/view-listing/"+item.id}>
                        <Button size="sm" className='w-full' >View</Button>
                    </Link>
                    <Link href={"/edit-listing/"+item.id}>
                        <Button size="sm" variant="outline" className='w-[150px]'>Edit</Button>
                    </Link>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button type='button' size="sm" variant="destructive">
                          <Trash2/>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Ready to delete?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Do you really want to delete this listing.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                </div>
              </div>
            </div>
                ))
            }
        </div>
    </div>
  )
}

export default UserListing