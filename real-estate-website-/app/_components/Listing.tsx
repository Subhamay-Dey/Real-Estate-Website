import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Listing({listing}:any) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {listing.map((item: any, index: any) => (
          <div>
            <Image src={item.listingImages[0].imgUrl}
              width={800}
              height={150}
              className='rounded-lg object-cover h-[220px]'
              alt='listingImage'
            />
            <div className='flex mt-2 flex-col gap-2'>
              <h2 className='font-bold text-xl'>${item.price}</h2>
              <h2 className='flex gap-2 text-sm text-gray-400'>
                <MapPin className='h-4 w-4'/>
              {item.address}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Listing