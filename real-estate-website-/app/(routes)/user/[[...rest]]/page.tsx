
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div className='my-4 md:px-10 lg:px-32'>
        <h2 className='font-bold text-2xl mb-4'>Profile</h2>
        <UserProfile routing="hash"/>
    </div>
  )
}

export default page