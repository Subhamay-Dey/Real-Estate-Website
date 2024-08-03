"use client"
import { UserButton, UserProfile } from '@clerk/nextjs'
import { Building2 } from 'lucide-react'
import React from 'react'
import UserListing from './_components/UserListing'

function page() {
  return (
    <div className='my-4 md:px-10 lg:px-32 w-full'>
        <h2 className='font-bold text-2xl mb-4 ml-4'>Profile</h2>
        <UserProfile>
          <UserButton.UserProfilePage
            label='My Listing'
            labelIcon={<Building2 className='h-5 w-5'/>}
            url='my-listing'
          >
            <UserListing/>
          </UserButton.UserProfilePage>
        </UserProfile>
    </div>
  )
}

export default page