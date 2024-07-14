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
              height={250}
              className='rounded-lg h-[250px]'
              alt='listingImage'
            />
            <div>
              <h2 className='font-bold text-xl'>${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Listing